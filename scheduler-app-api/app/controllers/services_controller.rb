class ServicesController < ApplicationController

    def index
        services = Service.all 
        render json: ServiceSerializer.new(services)
    end

    def create
        service = Service.create(service_params)
        render json: ServiceSerializer.new(service)
    end

    private

    def service_params
        params.require(:service).permit(:kind, :kind_detail, :issue, :details)
    end

end
