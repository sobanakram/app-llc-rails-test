module Api
  class UsersController < ApplicationController
    def index
      users = User.all
      render json: users, adapter: :json
    end
  end
end