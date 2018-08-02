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

require 'rails_helper'

RSpec.describe Cart, type: :model do
  it "should belong to user" do
    t = Cart.reflect_on_association(:user)
    expect(t.macro).to eq(:belongs_to)
  end

  it "should belong to item" do
    t = Cart.reflect_on_association(:item)
    expect(t.macro).to eq(:belongs_to)
  end
end
