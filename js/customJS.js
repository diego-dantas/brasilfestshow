$(document).ready(function() {
    $(window).load(function() {
        $('.countDown_cont').addClass('row');
        $('.countDown__interval_basic_cont').addClass('col-sm-6 col-md-3');
        $('.owl-prev').css("display", "none");
        $('.owl-next').css("display", "none");
    });
});


// $(document).ready(function() {
//     // Transition effect for navbar 
//     $(window).scroll(function() {
//       // checks if window is scrolled more than 500px, adds/removes solid class
//       if($(this).scrollTop() > 200) { 
//           $('.navbar').addClass('bg-dark');
//       } else {
//           $('.navbar').removeClass('bg-dark');
//       }
//     });
// });