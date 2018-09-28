class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key_key: true, :null => false
      t.text :content, :null => false
      t.integer :total_count
      t.timestamps
    end
  end
end
