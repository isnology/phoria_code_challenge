FactoryBot.define do
  
  factory :user do
    sequence(:email) { |n| "test#{n}@example.com" }
    password { "123456" }
  end
  
  factory :tax do
    category { "GST" }
    rate { 0.1 }
  end
  
  factory :profile do
    first_name { "John" }
    last_name { "Doe" }
    user
  end
  
  factory :item do
    sequence(:name) { |n| "Cardboard #{n}" }
    sequence(:quality) do |n|
      if n.even?
        'Premium'
      else
        'High'
      end
    end
    sequence(:price_cents) do |n|
      if n.even?
        3000
      else
        2000
      end
    end
    sequence(:image) { |n| "image#{n}.jpg"}
  end

  factory :order do
    discount { 1.0 }
    shipping_cents { 3000 }
    user
  end

  factory :line do
    item
    quantity { 2 }
    price_cents { 120 }
    order
  end
  
  factory :promotion do
    sequence(:quantity) do |n|
      case n
        when 1
          0
        when 2
          9
        when 3
          20
      end
    end
    sequence(:discount) do |n|
      case n
        when 1
          1.0
        when 2
          1.0
        when 3
          0.9
      end
    end
    sequence(:shipping_cents) do |n|
      case n
        when 1
          3000
        when 2
          0
        when 3
          0
      end
    end
  end
end
