class HomesController < ApplicationController
    def index 
        homes = Home.all 
        
        render json:homes.to_json
    end 
end
