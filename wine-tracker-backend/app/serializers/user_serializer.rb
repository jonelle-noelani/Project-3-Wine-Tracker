class UserSerializer < ActiveModel::Serializer
 attributes :id, :name, :favorite_wine, :image_url, :wines
end
