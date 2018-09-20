module FranchiseHelper
  def display_ratings
    if @franchise.ratings.count.zero?
      "No ratings yet"
    else 
      "#{@franchise.average_rating} - #{@franchise.count_ratings} votes"
    end
  end

  def display_user_rating 
    @rating ? "Your Rating: #{@rating.stars}" : "Your Rating: None"
  end

  def display_rating_link
    @rating ? link_to("Change Your Rating!", edit_franchise_rating_path(@franchise)) : link_to("Give #{@franchise.name} a Rating!", new_franchise_rating_path(@franchise)) 
  end

  def display_summary(f)
    link_to(f.name + " - #{f.average_rating} stars", franchise_path(f))
  end
end