$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




// Add active class to the current button (highlight it)
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//Top Button 
//Top Button appears on scroll


document.getElementById('top').onscroll = function() {
  if ($(document).scrollTop() >= 300) {
    $('#top-button').stop().animate({opacity:1}, 500, 'linear');
  } else if ($(document).scrollTop() < 300) {
    $('#top-button').stop().animate({opacity:0}, 500, 'linear');
  }
};

/*
document.getElementById('top').onscroll = function() {
  let topButton = document.getElementById('top-button');
  if ($(document).scrollTop() >= 300) {
    $(topButton).animate({'opacity':'1'}, 150, 'linear');
  } else if ($(document).scrollTop() < 300) {
    $(topButton).animate({'opacity':'0'}, 150, 'linear');
  }
};
*/
//Top Button moves position when scrollbar gets to the bottom

