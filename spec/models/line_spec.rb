# == Schema Information
#
# Table name: lines
#
#  id          :integer          not null, primary key
#  item_id     :integer
#  quantity    :string
#  price_cents :integer
#  order_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Line, type: :model do
  it "should belong to order" do
    t = Line.reflect_on_association(:order)
    expect(t.macro).to eq(:belongs_to)
  end

  it "should belong to item" do
    t = Line.reflect_on_association(:item)
    expect(t.macro).to eq(:belongs_to)
  end
end
