(function () {
    window.onload = function () {
      var preloader = document.querySelector('.page-loading');
      preloader.classList.remove('active');
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    };
  })();


  $(document).ready(function(){
    $("#search-icon").click(function(){
      $(".form-container").toggle();
    })
  });