class Api::V1::ShopController < ApiController
  def index
    data = {
      items: Item.all,
      tax: Tax.find_by('GST'),
      promotions: Promotion.all
    }
    render json: data, status: :ok
  end

  def show
    data = {
      items: Item.find(params[:id]),
      tax: Tax.find_by('GST'),
      promotions: Promotion.all
    }
    render json: data, status: :ok
  end
end
