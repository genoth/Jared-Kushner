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
  var right = 150;
  $('div').each(function(i,val){
    $(this).animate({
      right: right
      opacity: .2
    }, 1500 );
    right = right + 150;
  });
  right = 0;
  $(".colors").each(function(i,val){
    $(this).animate({
      right: right
      opacity: .7
    }, 1500 );
    right += 150;
  });
});