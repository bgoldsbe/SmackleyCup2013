class ChangePosts < ActiveRecord::Migration
  def up
    change_column :posts, :state, :string, :default => "new"
    change_column :posts, :priority, :integer, :default => 0
  end

  def down
  end
end
