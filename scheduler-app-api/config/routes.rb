Rails.application.routes.draw do
  resources :technicians
  resources :services
  resources :appointments
  # resources :locations
  # resources :users

  resources :users do
    resources :locations
  end
end
