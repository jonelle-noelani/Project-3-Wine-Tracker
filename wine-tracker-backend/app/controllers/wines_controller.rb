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
        wine = Wine.find_or_create_by(
            name: params[:name],
            varietal: params[:varietal],
            wine_type: params[:wine_type],
            country: params[:country],
            price: params[:price],
            image_url: params[:image_url])
        render json: wine
    end

end
