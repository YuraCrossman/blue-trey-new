var request = new XMLHttpRequest();
request.open('GET','js/sources.json');
request.responseType = 'json';
request.send();

var request1 = new XMLHttpRequest();
request1.open('GET','js/audio.json');
request1.responseType = 'json';
request1.send();

if (window.localStorage.getItem('name')){
  $('.pr-text').text('Привет, '+ window.localStorage.getItem('name')+'!')
}

window.onload = $(function() {
  //$('body').on('contextmenu', false);
  CookieChecker.setCallback(function(cookieAllowed, adblockEnabled) {
      console.log('Cookie Checker callback');

      console.log(cookieAllowed);
      console.log(adblockEnabled);
  });
  var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false);
  var iOS7 = (navigator.userAgent.match(/(OS 7_0)/i) ? true : false);
  var android = (navigator.userAgent.match(/Android/i) ? true : false);
  if (iOS || iOS7 || android == true){
    console.log(iOS, iOS7, android);
    $('body').load('pages/block.html');
  }
  let vid = document.getElementById("mVideo");
  let vidHeight = vid.videoHeight;
  let vidWidth = vid.videoWidth;
  let aid = document.getElementById("mAudio");
  $('html').selectable();
  $('.window,.windowAudioClient').draggable({scroll: false}).resizable({maxHeight: 727,maxWidth: 1447,minHeight: 305,minWidth: 600});
  $('.safari-win').draggable({scroll: false}).resizable({maxHeight:476,minHeight:476,maxWidth:1447,minWidth:600});
  $('.modal-window').draggable({scroll: false})/*.resizable({minHeight: 305,minWidth: 600,maxHeight:vidHeight,maxHeight:vidWidth})*/;
  $('#modalImage>.modal-window').resizable({minHeight: 50,minWidth: 300,maxHeight:633 ,maxWidth:1066});
  $('.vb,.audioplayer,.safari,.windowAudioClient').draggable({scroll: false}); //ярлыки на рабочем столе
  //$('.window,.windowAudioClient').draggable({cancel: ".pan"});
  $('#theadmain').load('pages/1.html');
  $('#tbodymain').load('pages/home.html');
  if (window.localStorage.getItem('back')){$('body').css('background-image','url('+window.localStorage.getItem('back')+')')}
  $('[data-toggle=tooltip]').tooltip();
  $('#backSystem').collapse();
  backSize(window.localStorage.getItem('backSize'));
  //вызывное меню
  $("#menu").menu();
  $('body').contextmenu(function() {
    $('#menu').css({'display':'block'})
  });
  $('body').click(function() {
    $('#menu').css({'display':'none'})
  });
  $(".windowAudioClientPlayer").load('audiovisualization-master/index.html');
  //$("#frameSaf").load('https://ya.ru');
  var jsswitch = document.querySelector('.js-switch');
  var init = new Switchery(jsswitch, { size: 'small' });
});
function closeApp(){
  window.close();
}
//кнопка закрития окна
$("#main.closebutton").click(function(){
  var sound = new Audio();
  sound.src='files/sound/Hero.wav';
  sound.autoplay=true;
  $(".window").hide('toggle')[0];
});
$("#modal.closebutton").click(function(){
  var sound = new Audio();
  sound.src='files/sound/Hero.wav';
  sound.autoplay=true;
  $(".windowAudioClient").hide('toggle');
});
$("#modal-saf.closebutton").click(function(){
  var sound = new Audio();
  sound.src='files/sound/Hero.wav';
  sound.autoplay=true;
  $(".safari-win").hide('toggle');
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
  var toast = window.sessionStorage.getItem('toast');
  if (toast !== '1'){$('#toast-ms').toast('show');window.navigator.vibrate(600);window.sessionStorage.setItem('toast','1');}
});
$(".safari").dblclick(function(){
  $(".safari-win").toggle('slow');
  var sound = new Audio();
  sound.src='files/sound/Frog.wav';
  sound.autoplay=true;
});

/*function vb(file) {
  const token = window.localStorage.getItem('token');
  if (token==null||token==""){
    window.open("https://oauth.yandex.ru/authorize?response_type=token&client_id=c0525f3358d7477db0d18ed85c5274f6","left=200,top=100,width=1024,height=576");
  }
  else{
    $.ajax({
    type: 'GET',
    url: 'https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key='+file,
    contentType: 'application/json',
    headers: { Authorization: 'OAuth oauth_token="'+token+'", oauth_client_id="c0525f3358d7477db0d18ed85c5274f6"' }
   }).done(function(data) {
     //console.log(data);
     console.log('data called success');
     var myHeaders = new Headers();
     myHeaders.append('Authorization', 'OAuth oauth_token="'+token+'", oauth_client_id="c0525f3358d7477db0d18ed85c5274f6"');
     window.open(data['href'],'target', "left=200,top=100,width=1024,height=576,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes");
   }).then(function (err) {
     //console.log(err);
   });
 }
}*/
function vb(file) {
  ym(52271623,'reachGoal','DLVB');
  window.open(file,'target', "left=200,top=100,width=768,height=432,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes");
  $('#toast-dl').toast('show');window.navigator.vibrate(600);
  var sound = new Audio();
  sound.src='files/sound/Frog.wav';
  sound.autoplay=true;
}
/*function search(){
  $('iframe#frameSaf').attr('src',"//"+$("#searchSrc").val());
}*/

function clicksd(){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
}
$('.nav-group-item').on('click',function(){ //добавления класса active на кнопках "избранное"
  $('.nav-group-item').removeClass('active');
  $(this).addClass('active');
});
function pagesd(p){ //вкладки главного окна
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  $('#tbodymain').load('pages/'+p+'.html');
  if (p == 'home'){$('#theadmain').load('pages/1.html');$('.nav-group-item').removeClass('active');$('.icon-home').parent('.nav-group-item').addClass('active');}
  else if (p =='download'){$('#theadmain').load('pages/2.html');$('.nav-group-item').removeClass('active');$('.icon-download').parent('.nav-group-item').addClass('active');}
  else if (p =='galery'){$('#theadmain').load('pages/3.html');}
  else if (p =='calendar'){$('#theadmain').load('pages/calendar-tr.html');$('.nav-group-item').removeClass('active');$('.icon-calendar').parent('.nav-group-item').addClass('active');}
  else if (p =='alist'){$('#theadmain').load('pages/alie.html');$('.nav-group-item').removeClass('active');$('.icon-basket').parent('.nav-group-item').addClass('active');}
  else {}
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
  let player = new Plyr(document.getElementById('mVideo'),{invertTime:false,toggleInvert:false,quality:{default: 720, options:[1080, 720, 480, 360, 240]}});
  $('.plyr').css({"width":"100%"});
  $('#modalVideo').modal('show');
  function mediadataV(){
    if('mediaSession' in navigator){
      navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: artist,
      album: album,
      artwork: [poster_media[0]]
      });
    }
  }
  player.play()
  .then(_ => { mediadataV(); })
  .catch(error => { console.log(error) });
}
$('#modalVideo').on('hide.bs.modal', function (event) {
  let vid = document.getElementById("mVideo");
  vid.pause();
});

function modalVY(src){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  $('#mVideoY').attr("src",function(i, val){
    return val + src + "?autoplay=1&rel=0";}
  );
  //let player = new Plyr(document.getElementById('YT'),{invertTime:false,toggleInvert:false,quality:{default: 720, options:[1080, 720, 480, 360, 240]}});
  $('.plyr').css({"width":"100%"});
  $('#modalVideoY').modal('show');
  player.play()
  .then(_ => { player.play() })
  .catch(error => { console.log(error) });
}
$('#modalVideoY').on('hide.bs.modal', function (event) {
  let vid = document.getElementById("YT");
  $('#mVideoY').attr("src","https://www.youtube.com/embed/");
});

function modalA(i){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  $('#modalAudio').modal('show');
  var audioInfo = request1.response;
  if (i){
    title = audioInfo[i]["name"];
    artist = audioInfo[i]["artist"];
    album = audioInfo[i]["album"];
    poster_media = audioInfo[i]["poster-media"];
    Amplitude.init({
      songs: [audioInfo[i]],
      volume:100
    });
    function mediadataA(){
      if('mediaSession' in navigator){
        navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        artist: artist,
        album: album,
        artwork: [poster_media[0]]
        });
      }
    }
    Amplitude.play();
    mediadataA();
  }else{
    function inf() {
      title = $('span.song-name').text();
      artist = $('span[data-amplitude-song-info="artist"]').text();
      album = "#RusUTAU";
    }
    Amplitude.init({
      songs: audioInfo,
      volume:100
    });
    function mediadataA1(){
      if('mediaSession' in navigator){
        navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        artist: artist,
        album: album,
        artwork: [{"src": "files/UTAU_logo.jpg","sizes":"917x704","type":"image/jpg"}]
        });
        navigator.mediaSession.setActionHandler('previoustrack',function(){Amplitude.prev();Amplitude.play();inf();mediadataA();});
        navigator.mediaSession.setActionHandler('nexttrack',function(){Amplitude.next();Amplitude.play();inf();mediadataA();});
      }
    }
    Amplitude.play();
    inf();
    if (i){mediadataA();}
    else{mediadataA1();}
  }
  $("#play-pause").addClass('amplitude-playing');
  $('#song-played-progress').on('click', function( e ){
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;
    Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
  });
}
$('#modalAudio').on('hide.bs.modal', function (event) {
  Amplitude.stop();
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
function modalIG(i){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  $('.carousel').carousel(i);
  $('#modalImageG').modal('show');
}
function modalS(){
  var sound = new Audio();
  sound.src='files/sound/Morse.wav';
  sound.autoplay=true;
  $('#modalSettings').modal('show');
}
//настройки сайта
$('#modalSettings').on('show.bs.modal',function() {
  var name = window.localStorage.getItem('name');
  $('.name-input').val(name);
  var dark =  window.localStorage.getItem('dark');
  $('input[name="dark"]').prop('checked',dark);
  $('.carousel[data-target=back]').carousel();
  $('.backClientImage').attr('src',window.localStorage.getItem('backUpload'));
  $('.backClientUrl').attr('src',window.localStorage.getItem('backUrl'));
  $('input[name=urlBack]').val(window.localStorage.getItem('backUrl'));
  var backSize = window.localStorage.getItem('backSize');
  if (backSize == 'auto'){$('option[value=auto]').attr('selected','selected')}
  else if (backSize == 'cover'){$('option[value=cover]').attr('selected','selected')}
  else if (backSize == 'repeat'){$('option[value=repeat]').attr('selected','selected')}
});
function setChange(){
  window.localStorage.setItem('name',$('.name-input').val());
  window.localStorage.setItem('dark',$('input[name="dark"]').prop('checked'));
  if (window.localStorage.getItem('dark') == 'false'){window.localStorage.removeItem('dark')}
  window.localStorage.setItem('backSize',$('select[name=backOption] option:selected').val());
  backSize(window.localStorage.getItem('backSize'));
  $('#modalSettings').modal('hide');
}
function background(i) {
  window.localStorage.setItem('back',i);
  $('body').css('background-image','url('+window.localStorage.getItem('back')+')');
}
function backUp(file) {
  var url = window.URL.createObjectURL(file[0]);
  background(url);
  $('.backClientImage').attr('src',url);
  window.localStorage.setItem('backUpload',url);
}
function backUrl() {
  var url = $('input[name=urlBack]').val();
  background(url);
  $('.backClientUrl').attr('src',url);
  window.localStorage.setItem('backUrl',url);
}
$('button[data-target="#backSystem"]').on("click",function(){
  $('#backClient').collapse('hide');
  $('#backUrl').collapse('hide');
});
$('button[data-target="#backUrl"]').on("click",function(){
  $('#backClient').collapse('hide');
  $('#backSystem').collapse('hide');
});
$('button[data-target="#backClient"]').on("click",function(){
  $('#backSystem').collapse('hide');
  $('#backUrl').collapse('hide');
});
function backSize(i) {
  if (i == "cover"){$('body').css({'background-size':'cover','background-repeat':'no-repeat'})}
  else if (i == "auto"){$('body').css({'background-size':'contain','background-repeat':'no-repeat'})}
  else if (i == 'repeat'){$('body').css({'background-size':'auto','background-repeat':'repeat'})}
}
