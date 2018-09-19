class RatingsController < ApplicationController 
  before_action :require_login

  def new 
    @rating = Rating.new(franchise_id: params[:franchise_id], user_id: session[:user_id])
  end 

  def create 
    @rating = Rating.new(ratings_params)
    if @rating.valid?
      @rating.save 
      redirect_to franchise_path(@rating.franchise)
    else 
      redirect_to new_franchise_rating_path(@rating.franchise)
    end
  end

  def edit
    find_franchise
    find_rating
  end 

  def update
    find_franchise
    find_rating
    @rating.stars = params[:rating][:stars]
    @rating.save if @rating.valid?
    redirect_to franchise_path(@franchise)
  end

  def index  
    find_franchise
    @ratings = @franchise.ratings
  end

  private 

  def ratings_params 
    params.require(:rating).permit(:stars, :franchise_id, :user_id)
  end

  def find_franchise 
    @franchise = Franchise.find(params[:franchise_id])
  end

  def find_rating 
    @rating = current_user.ratings.find { |r| r.franchise_id == params[:franchise_id].to_i }
  end

end