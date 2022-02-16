class UtilitiesController < ApplicationController
    def index 
        utilities = Utility.all
        render json: utilities.to_json
    end 

    def show 
        utility = Utility.find(params[:id])

        render json: utility.to_json
    end 


    def update 
        utility = Utility.find(params[:id])
        utility.update(utility_params)

        render json: utility.to_json
    end 

    def create 
        utility = Utility.create(user_params)
    end 


    private
    def utility_params
        params.require(:utility).permit(:name, :home_id, :user_id, :door, :temperature, :light, :alarm_system )
    end 
end
