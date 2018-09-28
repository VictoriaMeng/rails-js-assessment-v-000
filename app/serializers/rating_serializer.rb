class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars, :franchise_id, :user_id
end
