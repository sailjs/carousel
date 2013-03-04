define(['view',
        'render',
        'class'],
function(View, render, clazz) {
  
  function Carousel(el, options) {
    options = options || {};
    Carousel.super_.call(this, el, options);
  }
  clazz.inherits(Carousel, View);
  
  return Carousel;
});
