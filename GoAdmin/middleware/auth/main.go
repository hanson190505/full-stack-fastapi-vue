package auth

import (
	"encoding/base64"
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/scrypt"
	"log"
	"net/http"
	"time"
)

type UserInfo struct {
	UID int
	Username string
	Role string
}

var xiaoming = UserInfo{
	13,
	"xiaoming",
	"admin",
}

type MyClaims struct {
	UID int
	Role string
	jwt.StandardClaims
}

const TokenExpireDuration = time.Hour * 2

var MySecret = []byte("需要从配置文件读取")

// 生成Token
func GenToken(username string)(string, error) {
	c := MyClaims{
		12,
		"admin",
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(TokenExpireDuration).Unix(),
			Issuer: "myClaims",
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodES256, c)
	return token.SignedString(MySecret)
}

//解析token
func ParseToken(tokenStr string)(*MyClaims, error){
	token, err := jwt.ParseWithClaims(tokenStr, &MyClaims{}, func(token *jwt.Token)(i interface{}, err error){
		return MySecret, nil
	})
	if err != nil {
		return nil, err
	}
	if claims, ok := token.Claims.(*MyClaims); ok && token.Valid {
		return claims, nil
	}
	return nil, errors.New("invalid token")
}


func AuthRequired() gin.HandlerFunc {
	return func(c *gin.Context){
		//authHeader := c.Request.Header().Get("Authorization")
		authHeader := c.GetHeader("Authorization")
		//salt 用16进制表示,最大支持256
		//salt := []byte{0x2d, 0x28, 0xf2, 0x58, 0xa7, 0x6a, 0xf4, 0x7b}
		dk, err := scrypt.Key([]byte("123456"), []byte("hansonkdiiesdfsdfnntrttt"), 1<<15, 8, 1, 32)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(base64.StdEncoding.EncodeToString(dk))
		if authHeader == ""{
			c.JSON(http.StatusBadRequest, gin.H{
				"code":400,
				"msg":"请求头中auth为空",
			})
			c.Abort()
			return
		}
	}
}
