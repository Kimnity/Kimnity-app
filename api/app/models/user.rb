# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:twitter]
  include DeviseTokenAuth::Concerns::User
  after_create do
    if self.email.empty?
      self.email = "#{self.uid}-#{self.provider}@example.com"
      self.save!
    end
  end

end
