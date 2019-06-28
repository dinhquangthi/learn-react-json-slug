$(function($) {
  var listBanh = $('.a1');
  var sau = $('.a1').next();

  new WOW().init();

  // function xuathien() {
  //   var vitri1 = $('.a1').offset().top;
  //   var vitri2 = $('.a2').offset().top;
  //   var vitri3 = $('.a3').offset().top;
  //   var vitri4 = $('.a4').offset().top;
  //   var vitri5 = $('.a5').offset().top;
  //   var vitri6 = $('.a6').offset().top;
  //   if ((window.pageYOffset <= vitri1) && (window.pageYOffset >= 100)) {
  //     $('.a1').addClass('moveleft');
  //   }
  //   if ((window.pageYOffset <= vitri2) && (window.pageYOffset >= vitri1-100)) {
  //     $('.a2').addClass('moveright');
  //   }
  //   if ((window.pageYOffset <= vitri3) && (window.pageYOffset >= vitri2-100)) {
  //     $('.a3').addClass('moveleft');
  //   }
  //   if ((window.pageYOffset <= vitri4) && (window.pageYOffset >= vitri3-100)) {
  //     $('.a4').addClass('moveright');
  //   }
  //   if ((window.pageYOffset <= vitri5) && (window.pageYOffset >= vitri4-100)) {
  //     $('.a5').addClass('moveleft');
  //   }
  //   if ((window.pageYOffset <= vitri6) && (window.pageYOffset >= 2236-100)) {
  //     $('.a6').addClass('moveright');
  //   }
  // };
  // xuathien();
  // $(window).scroll(function() {
  //   xuathien();
  // });
    // chuyen mau khi click vao trang duoc click
    $('.phantrang a').not('.nutnext,.nutprev').click(function() {
    $('.phantrang a').removeClass('active1');
    $(this).addClass('active1');
  });

  //viet cho nut next
  var next = $('.nutnext');
  $('.nutnext').click(function() {
      var tranghientai = $('.active1');
    var trangtieptheo = $('.active1').next();
    var laygiatri =$('.active1').next().attr('href');
    $(this).attr('href', laygiatri);
    $('.active1').removeClass('active1');
    trangtieptheo.addClass('active1');
  });
  //viet cho nut prev
  var prev = $('.nutprev');
  $('.nutprev').click(function() {
    var tranghientai = $('.active1');
    var trangtruoc = $('.active1').prev();
    var laygiatri =$('.active1').prev().attr('href');
    $(this).attr('href', laygiatri);
    $('.active1').removeClass('active1');
    trangtruoc.addClass('active1');
  });
})
