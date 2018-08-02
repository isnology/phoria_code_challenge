# == Schema Information
#
# Table name: lines
#
#  id          :integer          not null, primary key
#  item_id     :integer
#  quantity    :string
#  price_cents :integer
#  discount    :integer
#  order_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Line < ApplicationRecord
  belongs_to :item
  belongs_to :order
end
