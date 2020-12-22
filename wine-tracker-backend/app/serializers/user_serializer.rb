class UserSerializer < ActiveModel::Serializer
 attributes :id, :name, :favorite_wine, :image_url, :wines

  # def wines
  #   self.object.wines.map do |wine|
  #     {name: wine.name}
  #   end
  # end

end
