$("#menu-open").click(function(){
    $("nav").toggleClass("close");
    $("nav").toggleClass("open");
})


$(document).ready(function(){
  
    $(".menu-btn").click(function(){
      $("#side-nav").toggleClass("side-hide");
      $("#nav-overlay").toggleClass("overlay-add");
    });
  });


$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("nav").hasClass("sidenav open");
        if (_opened === true && !clickover.hasClass("menu-btn")) {
            $("div.menu-btn").click();
        }
    });
  });