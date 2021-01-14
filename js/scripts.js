$(document).ready(function() {
  const height = parseInt(prompt("How tall are you?(Put in a number)"));

  if (height < 81) {
    $('#under-81cm').show();
  } else if (height >= 81 && height <= 150) {
      $('#over-81cm').show();
  } else {
    $('#over-150cm').show();
  }
});

// && and

// || or