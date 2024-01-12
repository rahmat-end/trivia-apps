package routes

import (
	"trivia_app/handlers"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func BuyAvatarRoutes(e *echo.Group) {
	r := repositories.RepositoryBuyAvatar(postgres.DB)
	h := handlers.BuyAvatarHandler(r)

	e.GET("/buyavatars", h.FindBuyAvatars)
	e.GET("/buyavatar/:id", h.GetBuyAvatar)
}
