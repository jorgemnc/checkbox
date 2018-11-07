Rails.application.routes.draw do
  resources :products do
  	collection do
  		put :metodo_especial
  	end
  end	

end
