class V1::LineSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price_cents
  
  has_one :item
end
