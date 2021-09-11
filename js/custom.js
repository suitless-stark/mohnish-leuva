(function() {

  // $(window).load(function() {
  //   // fades out when the page is fully loaded
  //   $('.lds-ellipsis').delay(2000).fadeOut(500);
  // });

  // typewriter animation
  function typeWriter() {
    var i = 0;
    var txt = 'a junior web & graphic designer';
    var speed = 90;

    console.log(txt);

    function typeWriterEffect() {
      if (i < txt.length) {
        document.getElementById('tagline').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterEffect, speed);
      }
    }
    typeWriterEffect();
  }
  typeWriter();
  // typewriter animation ends

}());
