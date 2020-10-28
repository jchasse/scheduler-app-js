class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: locations
        # render json: LocationSerializer.new(locations).to_serialized_json
    end

    def create
        byebug
        location = Location.create(location_params)
        render json: LocationSerializer.new(location)
    end


    def show
        location = Location.find_by(id: params[:id])
        render json: location.to_json(:include => {
            :user => {:only => [:first_name, :last_name, :mobile_number, :email]}
        }, :except => [:updated_at])
    end

    private

    def location_params
        params.require(:location).permit(:street_addres, :unit, :city, :state, :zip)
    end

end
