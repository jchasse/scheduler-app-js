class LocationsController < ApplicationController
    def index
        user = User.all.find_by(id: params[:user_id])
        locations = user.locations
        render json: LocationSerializer.new(locations)
    end

    def create
        user = User.find_by(id: params[:user_id])
        location = user.locations.create(location_params)
        render json: LocationSerializer.new(location)
    end

    def update
        location = Location.find_by(id: params[:id])
        location.update(location_params)
        render json: LocationSerializer.new(location)
    end

    private

    def location_params
        params.require(:location).permit(:street_addres, :unit, :city, :state, :zip)
    end

end
