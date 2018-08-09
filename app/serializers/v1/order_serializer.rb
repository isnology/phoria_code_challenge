class V1::OrderSerializer < ActiveModel::Serializer
  attributes :id, :discount, :shipping_cents, :user_id, :date
  
  has_many :lines
  
  def date
    object.created_at.strftime("%d/%m/%Y")
  end
end
