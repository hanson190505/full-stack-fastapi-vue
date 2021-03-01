package model

import (
	"encoding/json"
	"fmt"
	"gorm.io/datatypes"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type JsonDetail struct {
	Name  string
	Age int
	Tags []string
	Orgs interface{}
}

func NewDB() {
	dsn := "host=localhost user=postgres password=123456 dbname=fastapi_db port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println(err)
	}

	aerr := db.AutoMigrate(&UserTest{})
	if aerr != nil {
		fmt.Println(aerr)
	}

	//db.Create(&UserTest{
	//	Name:"hanson",
	//	JsonDetails: datatypes.JSON([]byte(`{"name":"hanson","age":12,"tags": ["tag1", "tag2"], "orgs": {"orga": "orga"}}`)),
	//})

	var user UserTest
	var jsonDetail JsonDetail
	// 查询 attributes 中有 role 字段的 user
	db.First(&user, datatypes.JSONQuery("json_details").Equals("hanson", "name"))
	//fmt.Printf("user:%#v\n",user)

	fmt.Println(json.Unmarshal(user.JsonDetails, &jsonDetail))
	// 查询 attributes 中有 orgs->orga 字段的 user
	db.First(&user, datatypes.JSONQuery("json_details").HasKey("orgs", "orga"))
}