class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :varietal, :wine_type, :country, :price, :image_url, :reviews
end
