class WinesController < ApplicationController
    
    def index
        wines = Wine.all
        render json: wines
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

    def update
        update_wine = Wine.find(params[:id])
        wine = update_wine.update(
            name: params[:name],
            varietal: params[:varietal],
            wine_type: params[:wine_type],
            country: params[:country],
            price: params[:price],
            image_url: params[:image_url])
        render json: wine
    end

    def destroy
        wine = Wine.find(params[:id])
        wine.destroy
    end

end
