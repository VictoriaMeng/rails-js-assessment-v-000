class FranchiseSerializer < ActiveModel::Serializer
  attributes :id, :name, :medium
  has_many :ratings
end
