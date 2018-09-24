module Api
  module Auth

    class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController

      # ①セッションを有効化
      skip_before_action :skip_session

      def redirect_callbacks
        super
      end
      def omniauth_success
        super
        update_auth_header
      end
      def omniauth_failure
        super
      end

      protected

      def render_data_or_redirect(message, data, user_data = {})
        if Rails.env.production?
          if ['inAppBrowser', 'newWindow'].include?(omniauth_window_type)
            render_data(message, user_data.merge(data))
          elsif auth_origin_url
            redirect_to DeviseTokenAuth::Url.generate(auth_origin_url, data.merge(blank: true))
          else
            fallback_render data[:error] || 'An error occurred'
          end
        else
          # わかりやすい様に開発時はjsonとして結果を返す
          render json: @resource, status: :ok
        end
      end

    end

  end
end