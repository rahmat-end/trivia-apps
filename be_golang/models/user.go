package models

import "time"

type User struct {
	UserId          int       `json:"userId" gorm:"primaryKey:autoIncrement"`
	Name            string    `json:"name" gorm:"type: varchar(255)"`
	Email           string    `json:"email" gorm:"type: varchar(255)"`
	EmailVerifiedAt time.Time `json:"emailVerifiedAt"`
	Password        string    `json:"password" gorm:"type: varchar(255)"`
	Profile         string    `json:"profile" gorm:"type: varchar(255)"`
	Username        string    `json:"username" gorm:"type: varchar(255)"`
	Role            string    `json:"role" gorm:"type: varchar(255)"`
	Diamond         int       `json:"diamond" gorm:"type: int"`
	Throphy         int       `json:"throphy" gorm:"type: int"`
	Avatar          string    `json:"avatar" gorm:"type: varchar(255)"`
	RememberToken   string    `json:"rememberToken" gorm:"type: varchar(100)"`
	CreatedAt       time.Time `json:"createdAt"`
	UpdatedAt       time.Time `json:"updatedAt"`
	// Transaction     []Transaction `gorm:"foreignKey:UserId;references:IdUser;constraint:OnUpdate:CASCADE,OnDelete:SET NULL"`
	// Transaction []Transaction `json:"transaction"`
}

// type UserResponse struct {
// 	IdUser          int    `json:"idUser"`
// 	Name            string `json:"name"`
// 	Email           string `json:"email"`
// 	EmailVerifiedAt bool   `json:"emailVerifiedAt"`
// 	Profile         string `json:"profile"`
// 	Username        string `json:"username"`
// 	Role            string `json:"role"`
// 	Diamond         int    `json:"diamond"`
// 	Throphy         int    `json:"throphy"`
// 	Avatar          string `json:"avatar"`
// 	// transactionId   int    `json:"-"`
// }

// func (UserResponse) TableName() string {
// 	return "users"
// }
