class User < ActiveRecord::Base 
  has_secure_password

  validates :name, presence: true, uniqueness: true 
  validates :password, presence: true, confirmation: true
  
  has_many :ratings 
  has_many :franchises, through: :ratings

  def rating_by_franchise(franchise)
    self.ratings.find_by(franchise_id: franchise.id)
  end

  def sort_by_franchise_name 
    self.ratings.sort do |x, y|
      Franchise.find(x.franchise_id).name <=> Franchise.find(y.franchise_id).name
    end
  end
  
  def sort_by_top_ratings
    self.sort_by_lowest_ratings.reverse
  end

  def sort_by_lowest_ratings
    self.ratings.order(:stars)
  end

end