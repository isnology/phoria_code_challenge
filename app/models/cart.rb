# == Schema Information
#
# Table name: carts
#
#  id         :integer          not null, primary key
#  item_id    :integer
#  quantity   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cart < ApplicationRecord
  belongs_to :item
  belongs_to :user
  
  attr_reader :total

  def self.total(user)
    total = Cart.where(user_id: user.id).group(:user_id).sum(:quantity)
    total[user.id] ? total[user.id] : 1
  end
  
end
