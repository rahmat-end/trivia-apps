# Trivia Apps Go Documentation

## Setup
Things to note :
1. Add your own `.env` file locally
2. Set new variable `NGROK_GO_URL` with `https://d486-2404-8000-1004-1019-8594-a2f7-c927-3a2f.ngrok-free.app/api/v1`
3. Go routes detail is down below

## Go Route Fetching Data
1. Get all user
- URL `NGROK_GO_URL` concat with `/users`
- Method `GET`
- Require Token `NO`

2. Get a single user
- URL `NGROK_GO_URL` concat with `/user/:id`
- Method `GET`
- Require Token `NO`

3. Get all diamond
- URL `NGROK_GO_URL` concat with `/diamonds`
- Method `GET`
- Require Token `NO`

4. Get a single diamond
- URL `NGROK_GO_URL` concat with `/diamond/:id`
- Method `GET`
- Require Token `NO`

5. Get all question
- URL `NGROK_GO_URL` concat with `/questions`
- Method `GET`
- Require Token `NO`

6. Get a single question
- URL `NGROK_GO_URL` concat with `/question/:id`
- Method `GET`
- Require Token `NO`

7. Get all free avatar
- URL `NGROK_GO_URL` concat with `/freeavatars`
- Method `GET`
- Require Token `NO`

8. Get a single free avatar
- URL `NGROK_GO_URL` concat with `/freeavatar/:id`
- Method `GET`
- Require Token `NO`

9. Get all buy avatar
- URL `NGROK_GO_URL` concat with `/buyavatars`
- Method `GET`
- Require Token `NO`

10. Get a single buy avatar
- URL `NGROK_GO_URL` concat with `/buyavatar/:id`
- Method `GET`
- Require Token `NO`

11. Get all user buy avatar
- URL `NGROK_GO_URL` concat with `/userbuyavatars`
- Method `GET`
- Require Token `NO`

12. Get a single user buy avatar
- URL `NGROK_GO_URL` concat with `/userbuyavatar/:id`
- Method `GET`
- Require Token `NO`

13. Get all transaction
- URL `NGROK_GO_URL` concat with `/transactions`
- Method `GET`
- Require Token `NO`