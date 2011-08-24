YUI().use("node", "event", "tabview", function(Y) {

    Y.on("domready", function() {
        Y.log("YUI loaded...");

        var tabview = new Y.TabView({
            srcNode: '#demo'
        });

        tabview.render();

/**
var opts = {
  lines: 12, // The number of lines to draw
  length: 7, // The length of each line
  width: 5, // The line thickness
  radius: 10, // The radius of the inner circle
  color: '#000', // #rbg or #rrggbb
  speed: 1, // Rounds per second
  trail: 100, // Afterglow percentage
  shadow: true // Whether to render a shadow
};
var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);
**/
    });




});