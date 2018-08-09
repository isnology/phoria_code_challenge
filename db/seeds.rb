# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.create([
  {name: 'VR Cardboard', quality: 'High', price_cents: 2000, image: 'corrugated-board-1.jpg'},
  {name: 'VR Cardboard', quality: 'Premium', price_cents: 3000, image: 'corrugated-board-2.jpg'}
])

Tax.create({category: 'GST', rate: 0.1})

Promotion.create([
  {quantity: 20, discount: 0.9, shipping_cents: 0},
  {quantity: 9, discount: 1.0, shipping_cents: 0},
  {quantity: 0, discount: 1.0, shipping_cents: 3000}
])