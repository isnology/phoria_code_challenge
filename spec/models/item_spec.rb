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

require 'rails_helper'

RSpec.describe Item, type: :model do
  it "should have many lines" do
    t = Item.reflect_on_association(:lines)
    expect(t.macro).to eq(:has_many)
  end

  it "should have many cart enties" do
    t = Item.reflect_on_association(:carts)
    expect(t.macro).to eq(:has_many)
  end
end
