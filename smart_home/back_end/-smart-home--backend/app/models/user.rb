class User < ApplicationRecord
    has_many :utilities
    has_many :homes, through: :utilities
end
