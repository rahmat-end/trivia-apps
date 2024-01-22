package authdto

type LoginResponse struct {
	UserId int    `json:"user_id"`
	Name   string `json:"name"`
	Token  string `json:"token"`
}
