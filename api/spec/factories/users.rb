require 'faker'
FactoryBot.define do

  pass  = Faker::Internet.password(8)
  mail = Faker::Internet.email

  factory :user do
    email                      { mail }
    password                   { pass }
    password_confirmation      { pass }
    name                       { Faker::StarWars.character }
    uid                        { mail }
    provider                   { 'email' }
    # tokens                     { '11111111111kfakfjaoewjisdfjawoeifal' }
  end
end