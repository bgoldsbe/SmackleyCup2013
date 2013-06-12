class ApplicationController < ActionController::Base
  protect_from_forgery

  def after_sign_in_path_for(resource_or_scope)
    admin_posts_path
  end

end
