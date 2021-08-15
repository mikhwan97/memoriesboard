//jQuery to make element dissapear slowly on a click of a button . Without CSS!
$(document).ready(function() {
    var target = $(".dissapear");
    var target2= $(".appear")
    $(".arrow-button").click(function() {
      removeElement(target);
      addElement(target2);
    });
  });
  
  function removeElement(target) {
    target.animate({
      opacity: "-=1"
    }, 1000, function() {
      target.remove();
    });
  }

  function addElement(target) {
    target.delay(800).show().animate({
      opacity: "+=1"
    });
  }