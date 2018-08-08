class V1::OrderSerializer < ActiveModel::Serializer
  attributes :id, :discount, :shipping_cents, :user_id
  
  has_many :lines
end
