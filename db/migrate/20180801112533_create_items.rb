class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :quality
      t.integer :price_cents

      t.timestamps
    end
  end
end
