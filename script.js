$(document).ready(function() {
  $('li').hover(function() {
      $(this).fadeTo('slow', 0.5);
    },
    function() {
      $(this).fadeTo('slow', 1);
    }
  ).on('click', function() {
    $(this).text('Clicked!');
    $(this).css("background-color", "#bcd3f2");
    $(this).css("color", "#5d697a");
    if ( $(this).hasClass('about') ) {
      $('.about-mid').toggle();
    } else if ( $(this).hasClass('shop') ) {
      $('.shop-mid').toggle();
    } else if ( $(this).hasClass('mid-nav') ) {
      $(this).css("background-color", "#c0c7d3");
    }
  });
});
