class UserSerializer < ActiveModel::Serializer
  attributes :id, :id, :name, :address, :city, :region, :country, :birthday
end
