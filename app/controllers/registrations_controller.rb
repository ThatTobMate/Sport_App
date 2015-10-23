# class RegistrationsController < Devise::RegistrationsController
#   include DeviseTokenAuth::Concerns::SetUserByToken
#   def new
#     super
#   end

#   def create
#     @user = User.create(user_params)
#     @user.provider = 'email'
#     @user.save!

#     render json: @user
#     # super
#     # add custom create logic here
#   end

#   def update
#     super
#   end
#   private

#     def user_params
#       params.require(:user).permit(:username, :format ,:email, :password, :salt, :encrypted_password)
#     end
# end 