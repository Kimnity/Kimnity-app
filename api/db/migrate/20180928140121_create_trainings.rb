class CreateTrainings < ActiveRecord::Migration[5.2]
  def change
    create_table :trainings do |t|
      t.string :name, :null => false
      t.string :type, :null => false
    end
  end
end
