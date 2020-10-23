class Wine < ApplicationRecord
    has_many :reviews, :dependent => :destroy
    has_many :users, through: :reviews 

    monetize :price_cents, as: "price"
end