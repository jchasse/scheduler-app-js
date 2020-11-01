class UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
        # render json: LocationSerializer.new(locations).to_serialized_json
    end

    def create
        user = User.create(user_params)
        render json: UserSerializer.new(user)
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: UserSerializer.new(user)
    end

    private

    def user_params
        params.require(:user).permit(:id, :first_name, :last_name, :mobile_number, :email)
    end
    
end
