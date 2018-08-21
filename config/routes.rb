Rails.application.routes.draw do
  
  root "init#index"
  devise_for :users, defaults: { format: :json }
  
  namespace :v1, defaults: { format: :json } do
    resources :profiles, only: [:show, :create, :update]
    resources :shops, only: [:index]
    resources :carts, only: [:index, :show, :create, :update, :destroy]
    resources :orders, only: [:index, :show, :create, :update]
    get 'is_signed_in', to: 'auth#index'
  end
  
  get '*path', to: 'init#index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
