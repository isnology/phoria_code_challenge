class Line < ApplicationRecord
  belongs_to :item
  belongs_to :header
end
