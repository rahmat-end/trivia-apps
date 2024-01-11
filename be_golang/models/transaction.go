package models

import "time"

type Transaction struct {
	IdTransaction int    `json:"idTransaction" gorm:"primaryKey;type:int;unique;not null"`
	AmountDiamond int    `json:"amountDiamond" gorm:"type: int"`
	TotalPrice    int    `json:"totalPrice" gorm:"type: int"`
	Status        string `json:"status" gorm:"type: varchar(255)"`
	UserId        int    `json:"userId"`
	// UserResponse    User      `json:"user"`
	IdDiamond int `json:"idDiamond"`
	// DiamondResponse Diamond   `json:"diamonds"`
	Diamond   Diamond   `gorm:"foreignKey:IdDiamond"`
	User      User      `gorm:"foreignKey:UserId"`
	CreatedAt time.Time `json:"createdAt"`
}
