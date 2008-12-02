GIFT: GIFT Is For T*
====================

GIFT is a jQuery plugin to use tiled image as animations. It is useful
whereever a PNG is better than a GIF. Using this plugin enables you to take
advantage of PNGs for true-color RGBA animations.


Creating tiled images
---------------------

### Imagemagick / graphicsmagick

On unix-like systems, you can use Imagemagick or Graphicsmagick package to
generate the tiled image out of your frames or MNG animation:

>`montage -background Transparent -tile 20x1 -geometry 48x48+0+0 00*png spinner.png`

where -tile specifies how you want the images tiled, in our case we want the
image to be a single row of images. -geometry specifies the size of the
individual frame and the amount of margin around it, 0px in our case.


