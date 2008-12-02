***FIXME**: General info here.*


Creating tiled images
=====================

Imagemagick / graphicsmagick
----------------------------

On unix-like systems, you can use Imagemagick or Graphicsmagick package to generate the tiled image out of your frames or MNG animation:

>`montage -background Transparent -tile 20x1 -geometry 48x48+0+0 00*png spinner.png`

where -tile specifies how you want the images tiled, in our case we want the image to be a single row of images. -geometry specifies the size of the individual frame and the amount of margin aound it, 0px in our case.


