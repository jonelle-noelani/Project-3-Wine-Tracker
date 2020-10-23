class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: JSON.pretty_generate(reviews.as_json)
    end

    def show
        review = Review.find(params[:id])
        render json: JSON.pretty_generate(review.as_json)
    end
end
