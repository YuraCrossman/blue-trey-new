var request = new XMLHttpRequest();
request.open('GET','js/sources.json');
request.responseType = 'json';
request.send();
request.onload = function() {
  var videoInfo = request.response;
}

window.onload = $(function() {
  let vid = document.getElementById("mVideo");
  let vidHeight = vid.videoHeight;
  let vidWidth = vid.videoWidth;
  let aid = document.getElementById("mAudio");
  $('html').selectable();
  $('.window').draggable({scroll: false}).resizable({maxHeight: 727,maxWidth: 1447,minHeight: 305,minWidth: 600});
  $('.modal-window').draggable({scroll: false})/*.resizable({minHeight: 305,minWidth: 600,maxHeight:vidHeight,maxHeight:vidWidth})*/;
  $('#modalImage>.modal-window').resizable({minHeight: 50,minWidth: 300,maxHeight:633 ,maxWidth:1066});
  $('.vb,.audioplayer,.windowAudioClient').draggable({scroll: false});
  //$('.window,.windowAudioClient').draggable({cancel: ".pan"});
});
//кнопка закрития окна
$(".closebutton").click(function(){
  $(".window").hide('toggle')[0];
  var sound = new Audio();
  sound.src='files/sound/Hero.wav';
  sound.autoplay=true;
});
$("#modal.closebutton").click(function(){
  $(".windowAudioClient").hide('toggle')[0];
  var sound = new Audio();
  sound.src='files/sound/Hero.wav';
  sound.autoplay=true;
});
//главное приложение
$(".vb").dblclick(function(){
  $(".window").toggle('slow');
  var sound = new Audio();
  sound.src='files/sound/Frog.wav';
  sound.autoplay=true;
});
$(".audioplayer").dblclick(function(){
  $(".windowAudioClient").toggle('slow');
  var sound = new Audio();
  sound.src='files/sound/Frog.wav';
  sound.autoplay=true;
});
function clicksd(){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
}
function errorsd(){
  var sound = new Audio();
  sound.src='files/sound/Basso.wav';
  sound.autoplay=true;
}
//полнооконный режим окна
$('.toolbar').dblclick(function() {
	if ($('.window').hasClass('full')) {
		$('.window').removeClass('full');
	} else {
		$('.window').addClass('full');
	}
});
//видео, аудио, картинки
function modalV(i){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  var videoInfo = request.response;
  title = videoInfo[i]["title"];
  artist = videoInfo[i]["artist"];
  album = videoInfo[i]["album"];
  poster = videoInfo[i]["poster"];
  poster_media = videoInfo[i]["poster-media"];
  sources = videoInfo[i]["sources"];
  preview = videoInfo[i]["preview"];
  $('source').remove();
  for (var i = 0; i < sources.length; i++) {
    var html = "<source src="+sources[i]['src']+" size="+sources[i]['size']+">";
    $('#mVideo').append(html);
  }
  $('#mVideo').attr({src:sources[0]['src'],poster:poster,'data-poster':poster,autoplay:true,'previewThumbnails':preview});
  //$('.plyr__poster')css({"background-image":poster});
  let player = new Plyr(document.getElementById('mVideo'),{previewThumbnails:{enabled:true,src:preview},invertTime:false,toggleInvert:false,quality:{default: 720, options:[1080, 720, 480, 360, 240]}});
  $('.plyr__progress__buffer').css({"top":"100%","left":"5px"});
  $('.plyr').css({"width":"100%"});
  $('#modalVideo').modal('show');
  function mediadata(){
    if('mediaSession' in navigator){
      navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: artist,
      album: album,
      artwork: [
        poster_media[0]
        ]
      });
    }
  }
  player.play()
  .then(_ => { mediadata(); })
  .catch(error => { console.log(error) });
  //$('#mVideo source').attr({'src':src})[0];
  //$('#mVideo').attr({'src':src,'autoplay':'true'});
  //$('#mVideo').play();
}
$('#modalVideo').on('hide.bs.modal', function (event) {
  let vid = document.getElementById("mVideo");
  vid.pause();
});
function modalA(files){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  $('#modalAudio').modal('show');
  //Visualbuffer.handleFiles(src);Visualization.playSample();
  handleFiles(files);
  $('#mAudio').attr({'src':src,'autoplay':'true'});
}
$('#modalAudio').on('hide.bs.modal', function (event) {
  let aid = document.getElementById("mAudio");
  aid.pause();
});
function modalI(src){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  $('#modalImage').modal('show');
//  $('#mImage').attr({'src':src});
  function funcBefore() {
    $('#mImage').attr({'src':''});
    $('#load').show();
  }
  function funcSuccess(data) {
    $('#load').hide();
    $('#mImage').attr({'src':src});
  }
  $.ajax({
    type: "GET",
    url: src,
    beforeSend: funcBefore,
    success: funcSuccess
  });
}
//вызывное меню
/*$("#tr-about").oncontextmenu(function(){
  console.log(oncontextmenu(event));
  this.menu({disabled: true});
});*/
