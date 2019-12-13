Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: :index
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
