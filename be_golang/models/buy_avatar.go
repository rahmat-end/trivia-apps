package models

import "time"

type BuyAvatar struct {
	IdBuyavatar    int       `json:"id_buyavatar" gorm:"primaryKey:autoIncrement"`
	PhotoBuyavatar string    `json:"photo_buyavatar" gorm:"type:varchar(255)"`
	PriceBuyavatar int       `json:"price_buyavatar" gorm:"type: int"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}
