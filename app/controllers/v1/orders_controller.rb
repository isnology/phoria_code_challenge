class V1::OrdersController < ApiController
  before_action :authenticate_user!, only: [:index, :show, :create, :update, :destroy]
  before_action :set_order, only: [:show, :update]
  
  def index
    render json: Order.where(user_id: current_user.id).includes(lines: [:item]).order(id: :desc),
           adapter: :json, status: :ok
  end

  def show
    render json: @order, adapter: :json, status: :ok
  end

  def create
    carts = Cart.where(user_id: current_user.id).includes(:item)
    total, lines = build_lines(carts)
    promotion = Promotion.record(total)
    order = Order.new(user: current_user,
                      discount: promotion.discount,
                      shipping_cents: promotion.shipping_cents)
    
    Order.transaction do
      if order.save
        lines.each do |line|
          line.order_id = order.id
          unless line.save
            render json: line.errors, status: :unprocessable_entity && return
          end
        end
        Cart.where(user_id: current_user.id).destroy_all
        render json: order, adapter: :json, status: :created
      else
        render json: order.errors, status: :unprocessable_entity
      end
    end
  end

  def update
    if @order.update(order_params)
      render json: @order, adapter: :json, status: :ok
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def order_params
    params.require(:order).permit(:id, :discount, :shipping_cents, :user_id)
  end

  def set_order
    @order = Order.find(params[:id])
  end
  
  def build_lines(carts)
    total = 0
    lines = []
    carts.each do |cart|
      total += cart.quantity
      lines << Line.new(item_id: cart.item_id,
                        quantity: cart.quantity,
                        price_cents: cart.item.price_cents)
    end
    return total, lines
  end
end
