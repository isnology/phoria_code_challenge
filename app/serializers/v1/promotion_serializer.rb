class V1::PromotionSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :discount, :shipping_cents
end
