package routes

import (
	"trivia_app/handlers"
	"trivia_app/pkg/postgres"
	"trivia_app/repository"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group) {
	r := repository.RepositoryUser(postgres.DB)
	h := handlers.UserHandler(r)

	e.GET("/users", h.FindUsers)
	e.GET("/user/:id", h.GetUser)
}
