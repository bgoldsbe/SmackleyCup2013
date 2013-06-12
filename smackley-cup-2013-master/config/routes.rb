AICE::Application.routes.draw do
  root :to => "home#index"
  
  resources :posts
  
  match 'posts/submit' => 'posts#create'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

end
