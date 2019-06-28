 document.addEventListener('DOMContentLoaded', function() {
  var headerLight = document.querySelector('.header');
  var statusHeader = 'duoi100';
  var headerLight2 = document.querySelectorAll('.header2');

  $(window).scroll(function() {

        if (window.pageYOffset > 100) {
          if (statusHeader == 'duoi100') {
            headerLight.classList.add('menudam');
            for (var i = 0; i < headerLight2.length; i++) {
              headerLight2[i].classList.add('text-white');
            }
            statusHeader = 'tren100';
          }
        } else if (window.pageYOffset < 100) {
          if (statusHeader == 'tren100') {
            statusHeader = 'duoi100';
            headerLight.classList.remove('menudam');
            for (var i = 0; i < headerLight2.length; i++) {
              headerLight2[i].classList.remove('text-white');
            }
          }
        }
  });
});
