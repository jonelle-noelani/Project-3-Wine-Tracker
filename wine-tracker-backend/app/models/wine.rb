class Wine < ApplicationRecord
    has_many :reviews, :dependent => :destroy
    has_many :users, through: :reviews 

    # attribute :price, as: :money, scale: 2

    # def wines
    #     self.object.wines.map do |wine|
    #         {price: wine.price.toFixed(2)}
    #     end
    # end

end
    # monetize :price_cents, as: :price
