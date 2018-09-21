class FranchiseSerializer < ActiveModel::Serializer
  attributes :id, :name, :medium, :average_rating, :ratings_count, :url
  has_many :ratings

  def average_rating
    "#{object.average_rating}"
  end

  def ratings_count
    "#{object.count_ratings}"
  end

  def url
    "/franchises/#{object.id}"
  end
end
