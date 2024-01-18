package routes

import (
	"trivia_app/handlers"
	// "trivia_app/pkg/middleware"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group) {
	r := repositories.RepositoryUser(postgres.DB)
	h := handlers.UserHandler(r)

	e.GET("/users", h.FindUsers)
	e.GET("/user/:id", h.GetUser)
}
