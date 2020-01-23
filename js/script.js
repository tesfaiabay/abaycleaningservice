
(function(){
  'use strict';


  document.addEventListener('DOMContentLoaded', function() {
    var address = document.getElementById('streetaddress');
    var phone = document.getElementById('phone');

    address.innerHTML = "417 Roosevelt Rd.<br>Wheaton, IL 60187";
    phone.innerHTML = "630-698-5611"

    // Year
    var cy = document.getElementById('current-year');
    var ey = document.getElementById('establish-year');


    var date = new Date();
    var dateEstablished = 1995;
    var year = date.getFullYear();

    ey.innerHTML = year - dateEstablished;
    cy.innerHTML = year;


  });

})();
