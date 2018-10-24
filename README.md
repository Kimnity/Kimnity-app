# API一覧

| API一覧 |
| ------ |

`base_URL: https://api-kimnity.herokuapp.com/api`

## User
`GET /auth/sign_up` 新規登録ページ表示  
`GET /auth/edit` ユーザー情報画面表示  
`PUT /auth` ユーザー情報変更  
`POST /auth` 新規登録  
`DELETE /auth` アカウント削除  
`GET /auth/sign_in`　ログインページ表示  
`POST /auth/sign_in` ログイン  
`DELETE /auth/sign_out`　ログアウト  
`GET /auth/password/edit` パスワード変更画面表示   
`POST /auth/password` パスワード新規作成  
`PUT /auth/password` パスワード変更  

### SNS
`GET /auth/twitter` SNS認証画面 Redirect(302)
