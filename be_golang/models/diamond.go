package models

import "time"

type Diamond struct {
	IdDiamond     int       `json:"idDiamond" gorm:"primaryKey:autoIncrement"`
	PhotoDiamond  string    `json:"photoDiamond" gorm:"type:varchar(255)"`
	AmountDiamond int       `json:"amountDiamond" gorm:"type: int"`
	PriceDiamond  int       `json:"priceDiamond" gorm:"type: int"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
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
