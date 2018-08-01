class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.references :item, foreign_key: true
      t.string :quantity
      t.integer :price_cents
      t.integer :discount
      t.references :header, foreign_key: true

      t.timestamps
    end
  end
end
