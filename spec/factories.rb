FactoryBot.define do
  factory :profile do
    first_name "John"
    last_name "Doe"
    user nil
  end
  
  factory :user do
    sequence :email do |n|
      "test#{n}@example.com"
    end
    password "123456"
  end
  
  factory :item do
    name "item1"
    quantity 2
    price_cents 100
  end

  factory :order do

  end

  factory :line do
    quantity 2
    price_cents 120
    discount 100
  end
end
