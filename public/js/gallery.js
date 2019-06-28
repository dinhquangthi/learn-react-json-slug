$(function($){
  $('.list-gallery ul').isotope({
      itemSelector: 'li',
    });
    $('.filter ul li a').click(function(event) {
      var danhmuc = $(this).data('category');
      console.log(danhmuc);
      var name = $(this).text();

      if(danhmuc=='all'){
        $('.list-gallery ul').isotope({filter: '*'});
      }
      else{
          $('.list-gallery ul').isotope({filter: danhmuc});
      }

      return false;
    });
      new WOW().init();
});
