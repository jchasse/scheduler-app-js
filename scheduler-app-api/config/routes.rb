Rails.application.routes.draw do
  resources :technicians
  resources :services
  resources :appointments
  resources :locations
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
