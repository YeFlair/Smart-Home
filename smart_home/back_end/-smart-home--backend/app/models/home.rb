class Home < ApplicationRecord
    has_many :utilities
    has_many :users, through: :utilities
end
