# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  it "should have one profile" do
    t = User.reflect_on_association(:profile)
    expect(t.macro).to eq(:has_one)
  end
  
  it "should have many orders" do
    t = User.reflect_on_association(:orders)
    expect(t.macro).to eq(:has_many)
  end

  it "should have many carts" do
    t = User.reflect_on_association(:carts)
    expect(t.macro).to eq(:has_many)
  end

  it "should have many item (through carts)" do
    t = User.reflect_on_association(:items)
    expect(t.macro).to eq(:has_many)
  end
end
