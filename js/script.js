
(function(){
  'use strict';


  document.addEventListener('DOMContentLoaded', function() {
    var address = document.getElementById('streetaddress');
    var phone = document.getElementById('phone');

    address.innerHTML = "417 Roosevelt Rd.<br>Wheaton, IL 60187";
    phone.innerHTML = "630-698-5611"

    // Year
    var cy = document.getElementById('current-year');

    var date = new Date();

    var year = date.getFullYear();

    cy.innerHTML = year;
  });




  //
  //
  //
  //
  // $(function() { var logo = $(".lrg-logo"); $(window).scroll(function() {
  // var scroll = $(window).scrollTop();
  //
  //     if (scroll >= 500) {
  //       if(!logo.hasClass("sml-logo")) {
  //         logo.hide();
  //         logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
  //       }
  //     } else {
  //       if(!logo.hasClass("lrg-logo")) {
  //         logo.hide();
  //         logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
  //       }
  //     }
  //
  // });
  // });
  //
  //
  //
  //
  //
  //




})();
