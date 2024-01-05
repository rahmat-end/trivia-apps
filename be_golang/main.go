package main

import (
	"trivia_app/database"
	"trivia_app/pkg/postgres"
	"trivia_app/routes"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	postgres.DatabaseInit()
	database.RunMigration()

	// routes
	routes.RouteInit(e.Group("/api/v1"))

	e.Logger.Fatal(e.Start("localhost:5000"))
}
