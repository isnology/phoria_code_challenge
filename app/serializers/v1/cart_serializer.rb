class V1::CartSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :quantity, :user_id
  
  has_one :item
end
