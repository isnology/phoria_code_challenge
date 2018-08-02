class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.float :discount
      t.integer :shipping_cents
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
