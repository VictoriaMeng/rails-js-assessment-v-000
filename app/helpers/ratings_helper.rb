module RatingsHelper 
  def display_listed_rating(rating)
    link_to("#{rating.franchise.name} - #{rating.stars} stars", franchise_path(rating.franchise) )
  end
end