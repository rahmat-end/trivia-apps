package database

import (
	"fmt"
	"trivia_app/models"
	"trivia_app/pkg/postgres"
)

func RunMigration() {
	err := postgres.DB.AutoMigrate(
		&models.User{},
	)

	if err != nil {
		panic(err)
	}

	fmt.Println("Migration success")
}
