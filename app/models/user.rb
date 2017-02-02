# Model for crop_example publicated on NNodes blog
class User < ApplicationRecord
  has_attached_file :avatar, styles: { original: {} },
                             processors: [:cropper]
  validates :avatar, attachment_presence: true
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
end
