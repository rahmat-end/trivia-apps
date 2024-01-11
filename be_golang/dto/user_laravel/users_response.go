package userslaraveldto

import "time"

type UsersLaravel struct {
	UserId          string    `json:"user_id"`
	Name            string    `json:"name"`
	Email           string    `json:"email"`
	EmailVerifiedAt bool      `json:"email_verified_at"`
	Password        string    `json:"password"`
	Profile         string    `json:"profile"`
	Username        string    `json:"username"`
	Role            string    `json:"role"`
	Diamond         int       `json:"diamond"`
	Throphy         int       `json:"throphy"`
	Avatar          string    `json:"avatar"`
	RememberToken   bool      `json:"remember_token"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
}
