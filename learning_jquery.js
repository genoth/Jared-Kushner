// console.log("This is working!")

// // $(document).ready(function() {
// //     $("div").fadeOut(1000);
// // });

// //    $(document).ready(function() {
// //        $('some_element').some_function(some_argument);
// //    });

// $(document).ready(function() {
//     $('div').mouseenter(function() {
//         $('div').fadeTo('fast', 0.5);
//     });
// });

// console.log("This works!")

// $( "#panel" ).animate({
//   // CSS properties and values
// }, 5000, "linear", function() {
//   //completion handler
// });

// $(document).ready(function(){
//   var right = 150;
// });

// $("#blue").(function() {
//   $(this).animate({
//     right: right,
//     opacity: .2
//   }, 1500 );
//   right = right + 150;
// });

// $("#green").

console.log("This works!")

$(document).ready(function() {
  $('#img').mouseenter(function() {
    $('#img').fadeTo('fast', 0.5);
  });
});

$( "#panel" ).animate({
  // CSS properties and values
}, 5000, "linear", function() {
  //completion handler
});

$(document).ready(function(){
  var right = 0;
  $(".colors").each(function(i,val){
    $(this).animate({
      right: right,
      opacity: .8
    }, 1500 );
    right += 150;
  });
});
$(document).ready(function(){
  var left = 0;
  $(".colors").each(function(i, val){
    $(this).animate({
      left: left,
      opacity: .6
    }, 1500 );
    left += 50;
  });
});
$(document).ready(function(){
 var top = 300;
 $(".colors").each(function(i, val){
  $(this).animate({
    top: top,
    opacity: .6
  }, 1500);
  top -= 100;
});
});


// $(document).ready(function() {
//   $('#img').mouseenter(function() {
//     $('#img').fadeTo('fast', 0.5);
//   });
// });
  // $(".colors").each(function(i,val){
  //   $(this).animate({
  //     left: left,

  // }