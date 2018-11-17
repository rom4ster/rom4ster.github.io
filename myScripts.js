$.fn.exists = function () {
    return this.length !== 0;
}
//while(document.readyState != "interactive") console.log("waitingForReady");

var BackgroundArray = [];


$(document).ready(function () {
                  BackgroundArray["#Home"] = "url('spacephoto.jpeg')";
                  BackgroundArray["#About"] = "url(ripple.jpg)";
                  BackgroundArray["#Skills"] = "url(keyboardBG2.jpg)";
                  BackgroundArray["#Projects"] = "url(computer.jpeg)";
                  BackgroundArray["#Contact"] = "none";
           



var text = '#'+$('.active').text();
$('.bodyDiv').hide();
//console.log(text, $(text));
$(text).show();
//console.log($('.topnav').exists());
$('.topnav li').click(function(){
                      if ($(this).hasClass('active')) {
                      return;
                      }
                      $('.topnav li').removeClass('active')
                      $(this).addClass('active');
                      var text = '#'+$('.active').text();
                      $('.bodyDiv').hide();
                      //console.log(text, $(text));
                      $(text).show();
                      $("body").css("background-image", BackgroundArray[text]);
                      text = '';
                      
    });
});


