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

class Tax < ApplicationRecord
end
