var ready = function () {
  $('.portfolioLink, .experienceLink, .contactLink').on('click', function(e){
    var target;
    e.preventDefault();
    switch($(this).attr("class")) {
      case 'portfolioLink':
        target = $('#intro');
        break;
      case 'experienceLink':
        target = $('#experience');
        break;
      case 'contactLink':
        target = $('#contact');
        break;
    }

    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
  });

  $(".piece").click(function() {
    if(!$(this).hasClass('activePiece')) {
      var piece = $(this),
          grandParentPosition = piece.parent().parent().position();

      piece.addClass('activePiece')

      piece.css("left", "-156px")
      piece.css("width", $(window).width()+"px")
      piece.css("height", ($(window).height()-73)+"px")
      $(".close", piece).show()
      
       setTimeout(function(){
        $(".pieceImages", piece).fadeIn("slow")
        $(".pieceLinks", piece).fadeIn("slow")
        $(".pieceLists", piece).fadeIn("slow")
      },200)
      $(".piece").not(this).hide()
    }
  })
  $(".close").click(function(evt) {
    evt.stopPropagation();
    $(this).hide()
    $(this).parent().removeClass('activePiece')
    $(this).parent().css("top",0).css("left",0)
    $(this).parent().css("width", "33%")
    $(this).parent().css("height", "50%")
    $(".pieceImages", $(this).parent()).hide()
    $(".pieceLinks", $(this).parent()).hide()
    $(".pieceLists", $(this).parent()).hide()
    setTimeout(function(){$(".piece").fadeIn()},300)
  })
  
}

$(document).ready(ready);

