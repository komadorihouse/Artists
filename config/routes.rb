Rails.application.routes.draw do
  devise_for :users
  root to: 'corrections#index'
  resource :corrections
end
