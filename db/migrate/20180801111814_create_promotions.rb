class CreatePromotions < ActiveRecord::Migration[5.1]
  def change
    create_table :promotions do |t|
      t.integer :quantity
      t.float   :discount
      t.integer :shipping_cents

      t.timestamps
    end
    add_index :promotions, :quantity, unique: true
  end
end
