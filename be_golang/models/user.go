package models

import "time"

type User struct {
	Id              int       `json:"id" gorm:"primaryKey:autoIncrement"`
	Name            string    `json:"name" gorm:"type: varchar(255)"`
	Email           string    `json:"email" gorm:"type: varchar(255)"`
	EmailVerifiedAt bool      `json:"emailVerifiedAt" gorm:"type: boolean"`
	Profile         string    `json:"profile" gorm:"type: varchar(255)"`
	Username        string    `json:"username" gorm:"type: varchar(255)"`
	Role            string    `json:"role" gorm:"type: varchar(255)"`
	Diamond         int       `json:"diamond" gorm:"type: int"`
	Throphy         int       `json:"throphy" gorm:"type: int"`
	Avatar          string    `json:"avatar" gorm:"type: varchar(255)"`
	CreatedAt       time.Time `json:"createdAt"`
}

type UserResponse struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

func (UserResponse) TableName() string {
	return "users"
}
