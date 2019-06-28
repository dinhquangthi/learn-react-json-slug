document.addEventListener('DOMContentLoaded', function() {
  var hienra1 = document.querySelector('.about-1980');
  var hienra2 = document.querySelector('.about-1990');
  var hienra3 = document.querySelector('.about-2005');
  var hienra4 = document.querySelector('.about-2017');

  var vitri1980 = $('.about-1980').offset().top ;
  var vitri1990 = $('.about-1990').offset().top ;
  var vitri2005 = $('.about-2005').offset().top ;
  var vitri2017 = $('.about-2017').offset().top ;

  // Xuat hien khi load lai trang khong can scroll
  function fadein(){
    if((window.pageYOffset <= vitri1980) && (window.pageYOffset >= 400)){
      hienra1.classList.add('hienra-1');
    }
    if((window.pageYOffset <= vitri1990) && (window.pageYOffset >= vitri1980)){
      hienra2.classList.add('hienra-2');
    }
    if((window.pageYOffset <= vitri2005) && (window.pageYOffset >= vitri1990)){
      hienra3.classList.add('hienra-3');
    }
    if((window.pageYOffset <= vitri2017) && (window.pageYOffset >= vitri2005)){
      hienra4.classList.add('hienra-4');
    }
  }
  fadein();
  // Xuat hien khi scroll chuot
  $(window).scroll(function() {
    fadein();
  });
});
