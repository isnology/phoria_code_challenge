class V1::ProfileController < ApiController
  before_action :authenticate_user!, only: [:show, :create, :update]
  before_action :set_profile, only: [:show, :update]
  
  def show
    render json: @profile, adapter: :json, status: :ok
  end

  def create
    profile = Profile.new(profile_params)
    profile.user = current_user
  
    if profile.save
      render json: profile, adapter: :json, status: :created
    else
      render json: profile.errors, status: :unprocessable_entity
    end
  end

  def update
    if @profile.update(profile_params)
      render json: @profile, adapter: :json, status: :ok
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def profile_params
    params.require(:profile).permit(:first_name, :last_name, :user_id)
  end

  def set_profile
    @profile = current_user.profile.first
  end
end
