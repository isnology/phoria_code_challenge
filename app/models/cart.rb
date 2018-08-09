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
  
end
