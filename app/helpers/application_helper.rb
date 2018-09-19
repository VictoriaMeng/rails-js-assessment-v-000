module ApplicationHelper

  def logged_in?
    session.include?(:user_id)
  end

  def current_user 
    User.find(session[:user_id])
  end

  def display_franchise_index_link
    link_to("Rate More Franchises", franchises_path)
  end

  def display_new_franchise_link
    link_to("Add More Franchises", new_franchise_path)
  end

  def display_user_page_link 
    link_to("#{current_user.name}'s Page", user_path(current_user))
  end

  def display_logout_link
    link_to("Logout", logout_path)
  end

  def display_errors(my_obj)
    # binding.pry
    my_obj.errors.full_messages if my_obj && my_obj.errors.any?
  end

  def display_flash_errors
    flash[:errors] if flash[:errors]
  end

end
