module Api
  module Auth

    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      def create
        puts "pepepepep"
      end
      private

      def sign_up_params
        params.permit(:email, :password, :password_confirmation)
      end

      def account_update_params
        params.permit(:name, :email)
      end

    end
  end
end