Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'auth',controllers: {
      registrations: 'api/auth/registrations',
      omniauth_callbacks: 'api/auth/omniauth_callbacks'
    }
  end
end
