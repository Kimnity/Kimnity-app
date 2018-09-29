class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.references :post, foreign_key: true, :null => false
      t.string :post_image, :null => false
      t.timestamps
    end
  end
end
