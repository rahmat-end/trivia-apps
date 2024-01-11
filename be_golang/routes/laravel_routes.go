package routes

import (
	"trivia_app/handlers"

	"github.com/labstack/echo/v4"
)

func LaravelRoutes(e *echo.Group) {

	e.GET("/freeavatar", handlers.GetFreeAvatar)
	e.GET("/usersLaravel", handlers.GetUsers)
	e.GET("/userLaravel/:id", handlers.GetUser)
}
