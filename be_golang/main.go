package main

import (
	"trivia_app/database"
	"trivia_app/pkg/postgres"
	"trivia_app/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	postgres.DatabaseInit()
	database.RunMigration()

	routes.RouteInit(e.Group("/api/v1"))

	e.Logger.Fatal(e.Start("localhost:3000"))
}
