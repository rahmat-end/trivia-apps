package models

import "time"

type Diamond struct {
	IdDiamond     int       `json:"id_diamond" gorm:"primaryKey:autoIncrement"`
	PhotoDiamond  string    `json:"photo_diamond" gorm:"type:varchar(255)"`
	AmountDiamond int       `json:"amount_diamond" gorm:"type: int"`
	PriceDiamond  int       `json:"price_diamond" gorm:"type: int"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
	// Transaction   []Transaction `gorm:"foreignKey:DiamondId;references:IdDiamond;constraint:OnUpdate:CASCADE,OnDelete:SET NULL"`
	// Transaction []Transaction `json:"transaction"`
}

// type DiamondResponse struct {
// 	// IdDiamond     int `json:"idDiamond"`
// 	AmountDiamond int `json:"amountDiamond"`
// 	PriceDiamond  int `json:"priceDiamond"`
// 	// TransactionId   int    `json:"-"`
// }

// func (DiamondResponse) TableName() string {
// 	return "diamonds"
// }
