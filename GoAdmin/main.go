package main

import (
	"GoAdmin/internal/config"
	"GoAdmin/middleware/auth"
	"fmt"
	"github.com/gin-gonic/gin"
)


func main() {
	r := gin.Default()
	config.InitConfig()
	router := r.Group("/api/v1", auth.AuthRequired())
	{
		router.GET("products", getProduct)
	}

	err := r.Run()
	if err != nil {
		fmt.Println("web service failed")
	}
}

func getProduct(c *gin.Context) {
	c.JSON(200, gin.H{
		"message":"products",
	})
}
