class ApplicationController < ActionController::Base
  
  def current_user 
    User.find(session[:user_id])
  end

  def logged_in?
    session.include?(:user_id)
  end

  private 

  def require_login
    unless logged_in?
      flash[:errors] = "You must be logged in as the correct user to view this page."
      redirect_to root_path
    end
  end

  def correct_user?
    session[:user_id] == params[:id]
  end

  def redirect_if_logged_in
    redirect_to current_user if logged_in?
  end

end
