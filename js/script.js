$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".slider").slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });
  $("input.autocomplete").autocomplete({
    data: {
      Apple: null,
      Microsoft: null,
      Florida: null,
      India: null,
      Google: "https://placehold.it/250x250"
    }
  });
  $(".materialboxed").materialbox();

  // scroll spy
  $(".scrollspy").scrollSpy();
});
