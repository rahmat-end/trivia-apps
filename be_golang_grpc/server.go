package main

import (
	servcer "trivia_app_grpc/cmd"
	postgres "trivia_app_grpc/pkg/postgres"
)

func main() {
	postgres.DatabaseInit()
	go servcer.GatewayServer()
	servcer.Server()
}
