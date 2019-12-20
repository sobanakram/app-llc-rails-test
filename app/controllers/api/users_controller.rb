module Api
  class UsersController < ApiController
    def index
      pagy, users = pagy(User, items: 5)

      render json: users, meta: pagy_metadata(pagy), adapter: :json
      #render json: User.all, adapter: :json
    end
  end
end