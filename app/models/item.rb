# == Schema Information
#
# Table name: items
#
#  id          :integer          not null, primary key
#  name        :string
#  quality     :string
#  price_cents :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Item < ApplicationRecord
  has_many :lines
  has_many :carts
  has_many :orders, through: :lines
end
