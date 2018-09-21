class FranchisesController < ApplicationController 
  before_action :require_login

  def index 
    @franchises = Franchise.sort_by_name
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @franchises }
    end
  end

  def show 
    @franchise = find
    @rating = current_user.rating_by_franchise(@franchise)  
    # render json: @franchise
  end

  def new 
    @franchise = Franchise.new 
  end

  def create 
    @franchise = Franchise.new(franchise_params)
    if @franchise.valid?
      @franchise.save
      redirect_to franchise_path(@franchise) 
    else
      # binding.pry
      # redirect_to new_franchise_path
      render 'new'
    end
  end

  def sort 
    case params[:sort]
    when "name"
      @franchises = Franchise.sort_by_name 
    when "most"
      @franchises = Franchise.sort_by_top_rated
    else
      @franchises = Franchise.sort_by_lowest_rated
    end
    render 'index'
  end

  private 

  def find 
    Franchise.find(params[:id])
  end

  def franchise_params 
    params.require(:franchise).permit(:name, :medium)
  end
end