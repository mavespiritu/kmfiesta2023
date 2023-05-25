(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })
  // Hide navbar when modals trigger
  $('.ess-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.ess-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })
  $('.healthmonitoring').on('show.bs.modal',function(e){
      

      var d = $(e.relatedTarget);
      $(this).find('iframe').removeAttr('src');
      var div = d.data('src');
      $(this).find('iframe').attr('src',div);
      
     
 
  })
  $('.healthmonitoring').on('hide.bs.modal',function(e){
   $(this).find('iframe').removeAttr('src');
   $(this).find('iframe').empty();

  })
  
  
         var d = new Date();
                        var day = ("0" + d.getDate()).slice(-2);
var month = ("0" + (d.getMonth() + 1)).slice(-2);

var today = d.getFullYear()+"-"+(month)+"-"+(day) ;

$('#date').val(today);
var datalistname =  $('#names');

 $.ajax({
        url: 'http://192.168.1.4/APP-REST/index.php?returntype=view&beans=json/getStaffPlusDivision',
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            datalistname.empty();
       $.each(response,function(i,v){
          datalistname.append('<option data-division="'+v.division+'" value="'+v.name+'" >'+v.name+'</option>')
       })
       

        }
    }); 
    
   
   $('#name').change(function(){
        var val = $(this).val();
        var d = $("#names").find('[value="'+val+'"]').data('division');
  
        if(typeof d!='undefined')
        $("#division").val(d)
    else
        $("#division").val("VISITOR")
        
    })


})(jQuery); // End of use strict
