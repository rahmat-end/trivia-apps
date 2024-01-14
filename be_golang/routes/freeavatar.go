package routes

import (
	"trivia_app/handlers"
	"trivia_app/pkg/middleware"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func FreeAvatarRoutes(e *echo.Group) {
	r := repositories.RepositoryFreeAvatar(postgres.DB)
	h := handlers.FreeAvatarHandler(r)

	e.GET("/freeavatars", middleware.Auth(h.FindFreeAvatars))
	e.GET("/freeavatar/:id", h.GetFreeAvatar)
}
