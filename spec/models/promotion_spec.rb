# == Schema Information
#
# Table name: promotions
#
#  id             :integer          not null, primary key
#  quantity       :integer
#  discount       :integer
#  shipping_cents :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'rails_helper'

RSpec.describe Promotion, type: :model do

end
