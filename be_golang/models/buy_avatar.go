package models

import "time"

type BuyAvatar struct {
	IdBuyavatar    int       `json:"idBuyavatar" gorm:"primaryKey:autoIncrement"`
	PhotoBuyavatar string    `json:"photoBuyavatar" gorm:"type:varchar(255)"`
	PriceBuyavatar int       `json:"priceBuyavatar" gorm:"type: int"`
	CreatedAt      time.Time `json:"createdAt"`
	UpdatedAt      time.Time `json:"updatedAt"`
}
