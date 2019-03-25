class RemoveNameAndDescriptionAndPriceAndVersionAndLogoFromApp < ActiveRecord::Migration[5.2]
  def change
    remove_column :apps, :name, :string
    remove_column :apps, :description, :text
    remove_column :apps, :price, :float
    remove_column :apps, :version, :string
    remove_column :apps, :logo, :string
  end
end
