class WinesController < ApplicationController
    
    def index
        wines = Wine.all
        render json: JSON.pretty_generate(wines.as_json)
    end

    def show
        wine = Wine.find(params[:id])
        render json: JSON.pretty_generate(wine.as_json)
    end

    def create
        byebug
        wine = Wine.find_or_create(params[:name, :varietal, :wine_type, :country, :price])
        render json: wine
    end

end
