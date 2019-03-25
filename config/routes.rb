Rails.application.routes.draw do
  namespace :api do
    resources :apps
  end
end
