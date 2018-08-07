class V1::ShopController < ApiController
  def index
    items = Item.all
    tax = Tax.find_by(category: 'GST')
    promotions = Promotion.all.order(quantity: :desc)
    
    render json: Shop.new(items, tax, promotions), serializer: V1::ShopSerializer, adapter: :json, status: :ok
  end

  def show
    item = Item.find(params[:id])
    tax =Tax.find_by(category: 'GST')
    promotions = Promotion.all.order(quantity: :desc)
    
    render json: Shop.new(item, tax, promotions), serializer: V1::ShopSerializer, adapter: :json, status: :ok
  end
end
