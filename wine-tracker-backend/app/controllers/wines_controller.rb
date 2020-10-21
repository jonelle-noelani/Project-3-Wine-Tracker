class WinesController < ApplicationController
    def index
        wines = Wine.all
        render json: JSON.pretty_generate(wines.as_json)
    end

    def show
        wine = Wine.find(params[:id])
        render json: JSON.pretty_generate(wine.as_json)
    end
end
