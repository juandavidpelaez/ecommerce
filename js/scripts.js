
$(document).ready(function(){

  var dict = {
    "sport":{"label":"label-info","class":".sport","id":"#sport","ref":"[href='#sport']"},
    "college":{"label":"label-warning","class":".college","id":"#college","ref":"[href='#college']"},
    "fit":{"label":"label-success","class":".fit","id":"#fit","ref":"[href='#fit']"},
    "hipster":{"label":"label-danger","class":".hipster","id":"#hipster","ref":"[href='#hipster']"}
  };
  //sidebar pills filter
  $(".nav-pills li a").click(function(){
      var filtro = $(this).attr('data-filter');
      $(".filter").not('.'+filtro).hide('3000');
      $('.filter').filter('.'+filtro).show('3000');        
    });

  //partial class match filter through the form-control, search button listener (experimental, for fun)
  $("#search-button").click(function() {
    var value = $(".form-control").val().toLowerCase();
    $(".filter").filter(function() {
      $(this).toggle($(this).attr("class").toLowerCase().indexOf(value) > -1 )
    });
  });
  
  //setting badge text for fun
  $("[href='#all'] .badge").text($(".product-row .filter").length);
  $.each(dict, function(i,item){
	  $(dict[i].ref+" .badge").text($(".product-row "+dict[i].class).length);
	});
  // $("[href='#hipster'] .badge").text($(".product-row .hipster").length);
  // $("[href='#fit'] .badge").text($(".product-row .fit").length);
  // $("[href='#college'] .badge").text($(".product-row .college").length);
  // $("[href='#sport'] .badge").text($(".product-row .sport").length);

  $(".modal-button").click(function(){
    // clasparent = getClothingClassParent(this);
    //clas = $(this).parent().attr("class")
    $("#myModal").on('show.bs.modal', function (e) {
      
      var button = $(e.relatedTarget);
      var parent = button.parent();
      var title = parent.find("h3").text();
      var img = parent.find("img").attr("src")
      var clas = getClothingClassParent(button);
      var description = parent.find("p").text();


      var modal = $(this);

      modal.find('.modal-title').text(title);
      modal.find('img').attr("src",img);
      modal.find('#description').text(description);

      $.each(clas, function(i,item){
        modal.find("."+dict[item].label).text(item);
      });
    });
    
    $("#myModal").on("hidden.bs.modal", function(e){
      var modal = $(this);
      modal.find('.modal-title').empty();
      modal.find('img').attr("src","");
      modal.find('#description').empty();
      modal.find(".label").empty();
    });

  });

  function getClothingClass(element){
    var classlist = ["hipster", "college","fit","sport"];
    var clases = element.attr("class");
    clases = clases.split(" ");
    clases = $.grep(classlist, function(e){
      return $.inArray(e, clases) !== -1;
    });
    return clases;
  };
  function getClothingClassParent(element){
    var classlist = ["hipster", "college","fit","sport"];
    var clases = element.parent().attr("class");
    clases = clases.split(" ");
    clases = $.grep(classlist, function(e){
      return $.inArray(e, clases) !== -1;
    });
    return clases;
  }; 

});