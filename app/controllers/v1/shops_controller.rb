class V1::ShopsController < ApiController
  def index
    items = Item.all
    tax = Tax.find_by(category: 'GST')
    promotions = Promotion.list
    
    render json: Shop.new(items, tax, promotions), serializer: V1::ShopSerializer, adapter: :json, status: :ok
  end
end
