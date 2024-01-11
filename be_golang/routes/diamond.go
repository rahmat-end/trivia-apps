package routes

import (
	"trivia_app/handlers"
	"trivia_app/pkg/postgres"
	"trivia_app/repositories"

	"github.com/labstack/echo/v4"
)

func DiamondRoutes(e *echo.Group) {
	r := repositories.RepositoryDiamond(postgres.DB)
	h := handlers.DiamondHandler(r)

	e.GET("/diamonds", h.FindDiamonds)
	e.GET("/diamond/:id", h.GetDiamond)
}
