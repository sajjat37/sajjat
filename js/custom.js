// $(function (){
//     $('.back-to-top').click(function (){
//         $('html,body').animate({scrollTop:0},2000)
//     });
 
//     $(window).scroll(function (){
//         var scrolling = $(this).scrollTop();
//         if( scrolling > 200){
//             $('.back-to-top').fadeIn(500);
//         }
//         else{
//             $('.back-to-top').fadeOut(500);
//         }
//     });
// });
 $(function (){
    $('.back-to-top').click(function (){
         $('body,html').animate({scrollTop:0},1500)
    });

   $(window).scroll(function (){
    var scrolling = $(this).scrollTop();
    if( scrolling > 200 ){
        $('.back-to-top').fadeIn(500);
    }
    else{
        $('.back-to-top').fadeOut(500);
    }
    if( scrolling > 300){
        $('#nav').addClass('bg');
    }
    else{
        $('#nav').removeClass('bg');
    }
   });

//    animation scroll js

$(".menu a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
      
        window.location.hash = hash;
      });
    } 
  });

//   ========================preloader=========
  $(window).on('load',function(){
    $('.preloader').delay(500).fadeOut(500);
  });


  // =========== counter=============
  $('.counter').counterUp({
    delay: 5,
    time: 2000
});
 });