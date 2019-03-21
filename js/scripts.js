
$(document).ready(function(){

  //sidebar pills filter
  $(".nav-pills li a").click(function(){
      var clase = $(this).attr('data-filter');
      $(".filter").not('.'+clase).hide('3000');
      $('.filter').filter('.'+clase).show('3000');        
    });

  //partial class match filter through the form-control, search button listener (experimental, for fun)
  $("#search-button").click(function() {
    var value = $(".form-control").val().toLowerCase();
    $(".filter").filter(function() {
      $(this).toggle($(this).attr("class").toLowerCase().indexOf(value) > -1 )
    });
  });

  //setting text for fun, just in the first badge text
  $(".nav-pills li:first-child a span").text($(".product-row .filter").length);
  $(".nav-pills li:nth-child(2) a span").text($(".product-row .hipster").length);
  $(".nav-pills li:nth-child(3) a span").text($(".product-row .college").length);
  $(".nav-pills li:nth-child(4) a span").text($(".fit").length);
  $(".nav-pills li:last-child a span").text($(".sport").length);
});