class CreateTaxes < ActiveRecord::Migration[5.1]
  def change
    create_table :taxes do |t|
      t.string :category
      t.float :rate

      t.timestamps
    end
    add_index :taxes, :category, unique: true
  end
end
