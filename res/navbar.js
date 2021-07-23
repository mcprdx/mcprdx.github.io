$(document).ready( function(){
  $(window).scroll( function(){
    var scroll = $(window).scrollTop();
      if (scroll > 20) {
        $(".nav-scroll").attr('style', 'color: #fff !important; background: #323232 !important;');
      }else{
        $(".nav-scroll").attr('style', 'color: #000 !important; background: none !important;'); }
  })
})