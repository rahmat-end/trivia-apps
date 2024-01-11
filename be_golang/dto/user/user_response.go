package usersdto

type UserResponse struct {
	IdUser          string `json:"idUser"`
	Name            string `json:"name" form:"name" validate:"required"`
	Email           string `json:"email" form:"email" validate:"required"`
	EmailVerifiedAt bool   `json:"emailVerifiedAt" form:"emailVerifiedAt" validate:"required"`
	Profile         string `json:"profile" form:"profile" validate:"required"`
	Username        string `json:"username" form:"username" validate:"required"`
	Role            string `json:"role" form:"role" validate:"required"`
	Diamond         int    `json:"diamond" form:"diamond" validate:"required"`
	Throphy         int    `json:"throphy" form:"throphy" validate:"required"`
}
