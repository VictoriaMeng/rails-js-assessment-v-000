class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, only: [:new, :create, :fb_create]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by(name: params[:user][:name])
    binding.pry
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id.to_s
      redirect_to user_path(@user)
    else
      redirect_to login_path
    end
  end

  def fb_create 
    @user = User.find_or_create_by(id: auth['uid']) do |u|
      u.name = auth['info']['name']
      u.password = auth['info']['name']
      u.password_confirmation = auth['info']['name']
    end
    session[:user_id] = @user.id.to_s
    redirect_to user_path(@user)
  end

  def destroy 
    session.delete(:user_id)
    redirect_to root_path
  end

  private 
    
  def auth
    request.env['omniauth.auth']
  end

end