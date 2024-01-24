package server

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	// "strconv"

	usersPb "trivia_app_grpc/pb"
	"trivia_app_grpc/repository"
	"trivia_app_grpc/utils"
	usertype "trivia_app_grpc/utils/type"
)

type UsersServer struct {
	usersPb.UnimplementedUsersServiceServer
	UserRepository repository.UserRepository
}

func UserHandler(userRepository repository.UserRepository) usersPb.UsersServiceServer {
	return &UsersServer{UserRepository: userRepository}
}

func (us *UsersServer) GetUsers(ctx context.Context, in *usersPb.EmptyRequest) (*usersPb.ResponseUsers, error) {

	userApi := utils.UrlApiValue("API_URL", "/users")

	res, err := http.Get(userApi)
	if err != nil {
		log.Fatalf("cannot get api %v", err.Error())
		os.Exit(1)
	}
	resBody, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatalf("Error : %v", err.Error())
		os.Exit(1)
	}

	// fmt.Println(string(resBody))

	var data usertype.UsersResponseT

	if err := json.Unmarshal(resBody, &data); err != nil {
		log.Fatalf("cannot unmarshal data%v", err.Error())
	}

	// fmt.Println(data)

	var usersResponse []*usersPb.RequestUser

	for _, u := range data.Data {
		usersResponse = append(usersResponse, &usersPb.RequestUser{
			Id:              int32(u.UserId),
			Name:            u.Name,
			Email:           u.Email,
			EmailVerifiedAt: u.EmailVerifiedAt,
			Password:        u.Password,
			Profile:         u.Profile,
			Username:        u.Username,
			Role:            u.Role,
			Diamond:         u.Diamond,
			Throphy:         u.Throphy,
			Avatar:          u.Avatar,
			RememberToken:   u.RememeberToken,
			CreatedAt:       u.CreatedAt,
			UpdatedAt:       u.UpdatedAt,
		})
	}

	result := &usersPb.ResponseUsers{
		Code: data.Code,
		Data: usersResponse,
	}

	return result, nil
}

func (us *UsersServer) GetOneUsers(ctx context.Context, in *usersPb.IdUsers) (*usersPb.ResponseOneUser, error) {
	userId := in.Id

	userEndpoint := fmt.Sprintf("/user/%d", userId)
	url := utils.UrlApiValue("API_URL", userEndpoint)
	res, err := http.Get(url)

	if err != nil {
		log.Fatalf("api error : %v", err.Error())
	}

	resBody, err := ioutil.ReadAll(res.Body)

	if err != nil {
		log.Fatalf("error res.body :%v", err.Error())
	}

	var data usertype.UserResponseT

	if err := json.Unmarshal(resBody, &data); err != nil {
		log.Printf("error Unmarshal data : %v", err.Error())
	}

	result := &usersPb.ResponseOneUser{
		Code: data.Code,
		Data: &usersPb.RequestUser{
			Id:              int32(data.Data.UserId),
			Name:            data.Data.Name,
			Email:           data.Data.Email,
			EmailVerifiedAt: data.Data.EmailVerifiedAt,
			Password:        data.Data.Password,
			Profile:         data.Data.Profile,
			Username:        data.Data.Username,
			Role:            data.Data.Role,
			Diamond:         data.Data.Diamond,
			Throphy:         data.Data.Throphy,
			Avatar:          data.Data.Avatar,
			RememberToken:   data.Data.RememeberToken,
			CreatedAt:       data.Data.CreatedAt,
			UpdatedAt:       data.Data.UpdatedAt,
		},
	}
	return result, nil
}

func (h *UsersServer) PutOneUsers(ctx context.Context, in *usersPb.IdUsers) (*usersPb.ResponseOneUser, error) {
	userId := int(in.Id)
	user, err := h.UserRepository.GetUser(userId)

	if err != nil {
		log.Fatalf("get user error : %v", err.Error())
	}

	// request := new(usertype.User)

	// if strconv.Itoa(int(request.UserId)) != "" {
	// 	user.UserId = request.UserId
	// }

	// if request.Name != "" {
	// 	user.Name = request.Name
	// }

	// if request.Email != "" {
	// 	user.Email = request.Email
	// }

	// if request.EmailVerifiedAt != "" {
	// 	user.EmailVerifiedAt = request.EmailVerifiedAt
	// }

	// if request.Password != "" {
	// 	user.Password = request.Password
	// }

	// if request.Profile != "" {
	// 	user.Profile = request.Profile
	// }

	// if request.Username != "" {
	// 	user.Username = request.Username
	// }

	// if request.Role != "" {
	// 	user.Role = request.Role
	// }

	// if strconv.Itoa(int(request.Diamond)) != "" {
	// 	user.Diamond = request.Diamond
	// }

	// if strconv.Itoa(int(request.Throphy)) != "" {
	// 	user.Throphy = request.Throphy
	// }

	// if request.Avatar != "" {
	// 	user.Avatar = request.Avatar
	// }

	// if request.RememeberToken != "" {
	// 	user.RememeberToken = request.RememeberToken
	// }

	// if request.CreatedAt != "" {
	// 	user.CreatedAt = request.CreatedAt
	// }

	user.Diamond = user.Diamond + 10
	user.UpdatedAt = time.Now().Format(time.RFC3339)

	response, err := h.UserRepository.UpdateUser(userId, user)

	if err != nil {
		log.Fatalf("update user error : %v", err.Error())
	}

	result := &usersPb.ResponseOneUser{
		Code: http.StatusOK,
		Data: &usersPb.RequestUser{
			Id:              int32(response.UserId),
			Name:            response.Name,
			Email:           response.Email,
			EmailVerifiedAt: response.EmailVerifiedAt,
			Password:        response.Password,
			Profile:         response.Profile,
			Username:        response.Username,
			Role:            response.Role,
			Diamond:         response.Diamond,
			Throphy:         response.Throphy,
			Avatar:          response.Avatar,
			RememberToken:   response.RememeberToken,
			CreatedAt:       response.CreatedAt,
			UpdatedAt:       response.UpdatedAt,
		},
	}

	return result, nil
}
