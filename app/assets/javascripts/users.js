var jcrop_api = null;
$(document).on('turbolinks:load', function(){
  $('#user_avatar').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      img.src = file.target.result;
      // remove css in case you change the avatar so it doesn't keep the other avatar styles
      $('.avatar-preview-tag').css('height', '');
      $('.avatar-preview-tag').css('width', '');
      if (jcrop_api !== null){
        jcrop_api.destroy()
      }
      $('.avatar-preview-tag').attr('src', img.src);
      $('#cropbox').Jcrop({
        onChange: update_crop,
        onSelect: update_crop,
        setSelect: [0, 0, 500, 300]
        // aspectRatio: 2  // Crop rectangle properties
      }, function(){
        jcrop_api = this;
      });
    }
    reader.readAsDataURL(image);
  function update_crop(coords) {
    $('#crop_x').val(coords.x);
    $('#crop_y').val(coords.y);
    $('#crop_w').val(coords.w);
    $('#crop_h').val(coords.h);
  }
  });
})
