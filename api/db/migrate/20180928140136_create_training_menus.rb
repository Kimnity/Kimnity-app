class CreateTrainingMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :training_menus do |t|
      t.references :post, foreign_key: true, :null => false
      t.references :training, foreign_key: true, :null => false
      t.integer :count
      t.integer :total_count
      t.integer :weight
      t.integer :time
      t.timestamps
    end
  end
end
