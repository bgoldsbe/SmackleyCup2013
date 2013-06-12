module ActiveAdmin
  module Dashboards
    module DashboardController
      def index
        redirect_to admin_posts_path
      end
    end
  end
end