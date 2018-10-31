require 'rails_helper'

RSpec.describe 'twitter', type: :request do
  describe 'GET api/auth/twitter' do
    before do
      get '/api/auth/twitter'
    end
    it 'リダイレクトされる' do
      expect(response.status).to eq 301
    end
  end
end