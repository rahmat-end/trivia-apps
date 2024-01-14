package routes

import (
	"trivia_app/handlers"
	"trivia_app/pkg/middleware"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	authRepository := repositories.RepositoryAuth(postgres.DB)
	h := handlers.HandlerAuth(authRepository)

	e.POST("/login", h.Login)
	e.GET("/checkauth", middleware.Auth(h.CheckAuth))
}
