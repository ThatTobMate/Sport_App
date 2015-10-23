class ApplicationController < ActionController::API
  include ActionController::RespondWith
  include ActionController::StrongParameters
  include ActionController::ImplicitRender

  # acts_as_token_authentication_handler_for User
  
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?

  private
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) << :username
    end
  end
