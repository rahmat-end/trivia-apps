package models

import "time"

type Transaction struct {
	IdTransaction int    `json:"id_transaction" gorm:"primaryKey;type:int;unique;not null"`
	AmountDiamond int    `json:"amount_diamond" gorm:"type: int"`
	TotalPrice    int    `json:"total_price" gorm:"type: int"`
	Status        string `json:"status" gorm:"type: varchar(255)"`
	UserId        int    `json:"user_id"`
	// UserResponse    User      `json:"user"`
	IdDiamond int `json:"id_diamond"`
	// DiamondResponse Diamond   `json:"diamonds"`
	Diamond   Diamond   `gorm:"foreignKey:IdDiamond"`
	User      User      `gorm:"foreignKey:UserId"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
