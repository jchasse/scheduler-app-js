class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.string :kind
      t.string :kind_detail
      t.string :issue
      t.string :details

      t.timestamps
    end
  end
end
