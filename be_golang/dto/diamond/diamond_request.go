package diamondsdto

import "time"

type CreateDiamondRequest struct {
	IdDiamond     int       `json:"idDiamond"`
	PhotoDiamond  string    `json:"photoDiamond"`
	AmountDiamond int       `json:"amountDiamond"`
	PriceDiamond  int       `json:"priceDiamond"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
}
