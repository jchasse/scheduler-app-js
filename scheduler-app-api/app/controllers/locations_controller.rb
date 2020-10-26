class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: LocationSerializer.new(locations).to_serialized_json
    end

    def show
        location = Location.find_by(id: params[:id])
        render json: location.to_json(:include => {
            :user => {:only => [:first_name, :last_name, :mobile_number, :email]}
        }, :except => [:updated_at])
    end

end
