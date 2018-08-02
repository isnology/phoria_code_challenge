# == Schema Information
#
# Table name: promotions
#
#  id             :integer          not null, primary key
#  quantity       :integer
#  discount       :float
#  shipping_cents :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Promotion < ApplicationRecord
end
