package models

import "time"

type UserBuyAvatar struct {
	IdUserBuyAvatar int       `json:"id_user_buy_avatar" gorm:"primaryKey:autoIncrement"`
	UserId          int       `json:"user_id"`
	IdBuyavatar     int       `json:"id_buyavatar"`
	User            User      `gorm:"foreignKey:UserId"`
	BuyAvatar       BuyAvatar `gorm:"foreignKey:IdBuyavatar"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
}
