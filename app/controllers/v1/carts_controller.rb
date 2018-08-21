class V1::CartsController < ApiController
  before_action :authenticate_user!, only: [:index, :show, :create, :update, :destroy]
  before_action :set_cart, only: [:show, :update, :destroy]
  
  def index
    render json: carts, adapter: :json, status: :ok
  end

  def show
    render json: @cart, status: :ok
  end

  def create
    cart = Cart.new(cart_params)
    cart.user = current_user
    cart.quantity = cart.quantity.to_i
    
    if cart.save
      render json: carts, adapter: :json, status: :created
    else
      render json: cart.errors, status: :unprocessable_entity
    end
  end

  def update
    if @cart.update(cart_params)
      render json: @cart, adapter: :json, status: :ok
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @cart.destroy
      render json: carts, adapter: :json, status: :ok
    else
      render json: @cart, status: :not_found
    end
  end
  
  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def cart_params
    params.require(:cart).permit(:id, :item_id, :quantity, :user_id)
  end

  def set_cart
    @cart = Cart.find(params[:id])
  end
  
  def carts
    Cart.where(user_id: current_user.id)
  end
end
