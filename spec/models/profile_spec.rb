require 'rails_helper'

RSpec.describe Profile, type: :model do
  it "should belong to user" do
    t = Profile.reflect_on_association(:user)
    expect(t.macro).to eq(:belongs_to)
  end
end
