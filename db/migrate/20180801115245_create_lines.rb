class CreateLines < ActiveRecord::Migration[5.1]
  def change
    create_table :lines do |t|
      t.references :item, foreign_key: true
      t.string :quantity
      t.integer :price_cents
      t.integer :discount
      t.references :order, foreign_key: true

      t.timestamps
    end
  end
end
