class Shop
  include ActiveModel::Model
  include ActiveModel::Serialization
  
  attr_accessor :items, :tax, :promotions
  
  def initialize(items, tax, promotions)
    @items = items
    @tax = tax
    @promotions = promotions
  end
end