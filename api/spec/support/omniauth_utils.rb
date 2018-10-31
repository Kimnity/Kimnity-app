def twitter_mock(email)
  OmniAuth.config.mock_auth[:twitter] = OmniAuth::AuthHash.new({
    "provider" => "twitter",
    "uid"  => "mock_uid_1234",
    "info" => {
      "name"  => "Mock User",
      "image" => "http://mock_image_url.com",
      "email" => email
    },
    "credentials" => {
       "tokens"  => "mock_credentials_token",
       "client" => "mock_credentials_client"
    },
    "extra" => {
      "raw_info" => {
        "name" => "Mock User"
      }
    }
  })
end

def invalid_twitter_mock
  OmniAuth.config.mock_auth[:twitter] = :invalid_credentials
end