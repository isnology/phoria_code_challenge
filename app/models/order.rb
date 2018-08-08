# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  discount       :float
#  shipping_cents :integer
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Order < ApplicationRecord
  belongs_to :user
  has_many :lines, dependent: :destroy
  has_many :items, through: :lines
end
