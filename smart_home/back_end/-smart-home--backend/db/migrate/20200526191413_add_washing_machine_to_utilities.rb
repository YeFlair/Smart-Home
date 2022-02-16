class AddWashingMachineToUtilities < ActiveRecord::Migration[6.0]
  def change
    add_column :utilities, :washing, :boolean
  end
end
