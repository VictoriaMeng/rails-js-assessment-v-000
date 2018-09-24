class RatingsController < ApplicationController 
  before_action :require_login

  def new 
    @rating = Rating.new(franchise_id: params[:franchise_id], user_id: session[:user_id])
  end 

  def create 
    @rating = Rating.new(stars: params[:rating][:stars], franchise_id: params[:franchise_id], user_id: session[:user_id])
    if @rating.valid?
      @rating.save 
      render json: @rating
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
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @rating, status: 200 }
    end
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