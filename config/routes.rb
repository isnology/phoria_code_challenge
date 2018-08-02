Rails.application.routes.draw do
  
  root "init#index"
  devise_for :users, defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
    resources :profile, only: [:show, :create, :update]
    resources :shop, only: [:index, :show]
    resources :cart, only: [:index, :show, :create, :update, :delete]
    resources :order, only: [:index, :show, :create, :update]

    scope :auth do
      get 'is_signed_in', to: 'auth#index'
    end
  end
  
  
  get '*path', to: 'init#index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
