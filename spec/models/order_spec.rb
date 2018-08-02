# == Schema Information
#
# Table name: orders
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Order, type: :model do
  
  it "should belong to user" do
    t = Order.reflect_on_association(:user)
    expect(t.macro).to eq(:belongs_to)
  end
  
  it "should have many lines" do
    t = Order.reflect_on_association(:lines)
    expect(t.macro).to eq(:has_many)
  end

  it "should have many items (through lines)" do
    t = Order.reflect_on_association(:items)
    expect(t.macro).to eq(:has_many)
  end

  # it "destroys dependent lines" do
  #   user = FactoryBot.create(:user)
  #   order = FactoryBot.create(:order, user: user)
  #   item = FactoryBot.create(:item)
  #   line = FactoryBot.create(:line, order: order, item: item)
  #
  #   order.destroy
  #
  #   expect { order.destroy }.to change { Line.count }.by(-1)
  # end
end
