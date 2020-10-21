class Wine < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    # monetize :price, as: "price"
end
