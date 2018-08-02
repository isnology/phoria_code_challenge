# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  first_name :string
#  last_name  :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Profile, type: :model do
  it "should belong to user" do
    t = Profile.reflect_on_association(:user)
    expect(t.macro).to eq(:belongs_to)
  end
end
