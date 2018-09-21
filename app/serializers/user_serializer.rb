class UserSerializer < ActiveModel::Serializer 
  has_many :ratings
end