class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :uid,      :string, null: false, default: ""
    change_column :users, :provider, :string, null: false, default: ""

    add_index :users, :confirmation_token,   unique: true
    add_index :users, [:uid, :provider], unique: true
  end
end
