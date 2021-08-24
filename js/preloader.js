window.onload = $(function () {
  var images = document.images, images_total_count = images.length, images_loaded_count = 0,
  preloader = document.getElementById("preload"), perc_display = document.getElementById("load_proc");

  for (var i = 0; i < images_total_count; i++){
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
  }
  function image_loaded(){
    images_loaded_count++;
    perc_display.innerText = (((100 / images_total_count) * images_loaded_count) << 0) + "%";
  }
  if (images_total_count >= images_loaded_count){
    setTimeout(function(){
      var sound = $("audio")[0];
      sound.play();
      $('#preload').fadeOut().end().delay(400).fadeOut(1600,"linear");
    }, 3000);
  }
});
