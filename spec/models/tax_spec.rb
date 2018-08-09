# == Schema Information
#
# Table name: taxes
#
#  id         :integer          not null, primary key
#  category   :string
#  rate       :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Tax, type: :model do

end
