class V1::ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quality, :price_cents
  
end
