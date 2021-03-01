package model

import (
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type UserTest struct {
	gorm.Model
	Name    string
	//Details pq.GenericArray `gorm:"type:json"`
	JsonDetails datatypes.JSON
}

