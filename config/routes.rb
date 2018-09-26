Rails.application.routes.draw do
  root to: "users#welcome"
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get '/users/sort', to: 'users#sort'
  resources :users
  resources :franchises do
    resources :ratings, only: [:new, :edit, :create, :update, :index, :show]
  end
  get '/sort', to: 'franchises#sort'
  get '/auth/facebook/callback' => 'sessions#fb_create'
end
