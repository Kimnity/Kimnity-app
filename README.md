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
`GET /auth/sign_in` ログインページ表示  
`POST /auth/sign_in` ログイン  
`DELETE /auth/sign_out` ログアウト  
`GET /auth/password/edit` パスワード変更画面表示   
`POST /auth/password` パスワード新規作成  
`PUT /auth/password` パスワード変更  

### SNS
`GET /auth/twitter` SNS認証画面 Redirect(302)

### Headers(必須パラメータ)
```
access-token →HJYXNBRzqt7qjTlgUjUeNw
client →rz1kj8VkkDae8byTKzQ7vg
content-type →application/json; charset=utf-8
uid →moai@example.com
```

### Response `200`
```
{
    "status": "success",
    "data": {
        "id": 2,
        "provider": "email",
        "uid": "moai@example.com",
        "email": "moai@example.com",
        "name": null,
        "image": null,
        "allow_password_change": false,
        "created_at": "2018-10-24T18:00:18.000+09:00",
        "updated_at": "2018-10-24T18:00:19.000+09:00"
    }
}
```
### Response `422`
```
{
    "status": "error",
    "data": {
        "id": null,
        "provider": "email",
        "uid": "",
        "email": "moai@example.com",
        "name": null,
        "image": null,
        "allow_password_change": false,
        "created_at": null,
        "updated_at": null
    },
    "errors": {
        "email": [
            "はすでに存在します"
        ],
        "full_messages": [
            "Eメールはすでに存在します"
        ]
    }
}
```
