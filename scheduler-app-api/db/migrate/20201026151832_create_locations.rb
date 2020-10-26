class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :street_address
      t.string :unit
      t.string :zip
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
