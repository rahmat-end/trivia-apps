package models

import "time"

type UserBuyAvatar struct {
	IdUserBuyAvatar int       `json:"idUserBuyAvatar" gorm:"primaryKey:autoIncrement"`
	UserId          int       `json:"userId"`
	IdBuyavatar     int       `json:"idBuyavatar"`
	User            User      `gorm:"foreignKey:UserId"`
	BuyAvatar       BuyAvatar `gorm:"foreignKey:IdBuyavatar"`
	CreatedAt       time.Time `json:"createdAt"`
	UpdatedAt       time.Time `json:"updatedAt"`
}
