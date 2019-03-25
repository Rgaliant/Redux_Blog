class AddBodyAndTitleToApps < ActiveRecord::Migration[5.2]
  def change
    add_column :apps, :body, :text
    add_column :apps, :title, :string
  end
end
