package config

import (
	"fmt"
	"github.com/spf13/viper"
)

type Config struct {
	Host string
	JWTAuth JWTAuth
	DB Postgres
}

type JWTAuth struct {
	Salt string
}

type Postgres struct {
	Host     string
	Port     int
	User     string
	Password string
	DBName   string
	SSLMode  string
}


func InitConfig() {
	viper.SetConfigName("config")
	viper.AddConfigPath(".")
	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println(err)
	}
}

