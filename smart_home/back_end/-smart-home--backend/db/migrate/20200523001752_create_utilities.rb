class CreateUtilities < ActiveRecord::Migration[6.0]
  def change
    create_table :utilities do |t|
      t.integer :home_id
      t.integer :user_id
      t.boolean :door
      t.integer :temperature
      t.boolean :light
      t.boolean :alarm_system

      t.timestamps
    end
  end
end
