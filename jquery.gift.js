// GIFT -- a jQuery plugin to use PNG RGBA tiled images as animations
// (c) 2008 Jakub 'jimmac' Steiner & Garrett LeSage

(function ($) {
  $.fn.gift = function() {
    var blank = "data:image/gif;base64,R0lGODlhFAAUALMAAAAAAIAAAACAAICAAAAA\
                  gIAAgACAgMDAwICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAEAAA8AL\
                  AAAAAAUABQAQAQV8MlJq7046827/2AojmRpnmiqrmYEADs=";
    $(this).each(function() {
      var width, height, img, image, offset, offset_x, newoffset_x;

      //replace the image with a blank we'll animate
      width = $(this).width();
      height = $(this).height(); //if height attr is omitted, this is bogus

      img = new Image(); //create a new image for measuring real dimenstions
      img.delay = 100; //100ms by default
      img.src = $(this).attr('src');

      $(img).attr("style","display: none;");

      $(this).after(img, function(){ console.log('appended');});

      $(this).attr('src', blank).css({
        background: 'url(' + img.src + ') no-repeat 0 0',
        width: width,
        height: height
      });

      //FIXME: read delay from the rel
      image = this; //needs to be the actual DOM object

      setInterval(function() {
        offset = $(image).css('background-position'); //x y in px
        offset_x = offset.match(/([-]?[0-9]*)px ([-]?[0-9]*)px/)[1]; //integer
        newoffset_x = offset_x - width;
        //FIXME: check for max offset
        newoffset_x = (newoffset_x<=-img.width)? 0 : newoffset_x;
        $(image).css('background-position', newoffset_x + "px 0");
      }, img.delay);

      $(img).remove();//remove the temp image 
    });
    return this;
  }
}) (jQuery)

//actually use the plugin on the document
$(document).ready(function() {
  $("img[rel*=animated]").gift();
});
