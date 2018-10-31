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
  end

  factory :sns_user,class: User do
    password                   { pass }
    password_confirmation      { pass }
    name                       { Faker::StarWars.character }
    uid                        { Faker::Number.unique.number }
    provider                   { 'twitter' }
  end
end