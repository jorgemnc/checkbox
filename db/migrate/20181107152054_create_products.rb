class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :nombre
      t.string :status
      t.string :categoria

      t.timestamps
    end
  end
end
