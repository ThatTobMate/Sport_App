class UsersController < ApplicationController
  before_action :authenticate_user!
def index
  @users = User.all

  render json: @users
end

def the_current_user
  # binding.pry
  @currentUser = current_user
  # @user.save
  # puts 'debug'

  render json: @currentUser
end

def who_user
  # binding.pry
  @user = User.find(params[:id])

  render json: @user
end

end