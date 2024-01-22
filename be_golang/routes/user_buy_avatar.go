package routes

import (
	"trivia_app/handlers"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func UserBuyAvatarRoutes(e *echo.Group) {
	r := repositories.RepositoryUserBuyAvatar(postgres.DB)
	h := handlers.UserBuyAvatarHandler(r)

	e.GET("/userbuyavatars", h.FindUserBuyAvatars)
	e.GET("/userbuyavatar/:id", h.GetUserBuyAvatar)
}
