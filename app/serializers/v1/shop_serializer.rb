class V1::ShopSerializer < ActiveModel::Serializer
  attributes :items, :tax, :promotions
  
  has_many :items
  has_one :tax
  has_many :promotions
end
