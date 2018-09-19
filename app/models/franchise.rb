class Franchise < ActiveRecord::Base 
  has_many :ratings 
  has_many :users, through: :franchises

  validates :name, presence: true, uniqueness: true
  validates :medium, presence: true

  def self.mediums 
    [["TV Shows", "TV Shows"], ["Movie", "Movie"], ["Book", "Book"], ["Webcomic", "Webcomic"], ["Video Game", "Video Game"]]
  end

  def self.sort_by_name 
    self.order(:name)
  end
  
  def self.sort_by_top_rated 
    self.sort_by_lowest_rated.reverse
  end

  def self.sort_by_lowest_rated 
    self.all.map.sort { |x, y| x.average_rating <=> y.average_rating }
  end

  def average_rating
    (self.ratings_total.to_f / self.count_ratings.to_f).round(2)
  end

  def ratings_total 
    self.ratings.map(&:stars).reduce(:+)
  end

  def count_ratings 
    self.ratings.count
  end  


end