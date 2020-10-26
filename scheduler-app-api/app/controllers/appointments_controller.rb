class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.all
        render json: appointments, include: [:user, :location]
    end

    def show
        appointment = Appointment.find_by(id: params[:id])
        render json: appointment.to_json(:include => {
            :user => {:only => [:first_name, :last_name, :mobile_phone, :email]},
            :location => {:only => [:street_address, :unit, :zip, :city, :zip]}
        }, :except => [:updated_at])
    end
    

end
