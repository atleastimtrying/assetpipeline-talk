(function() {
  var App;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  App = App = (function() {

    function App() {
      this.nextSlide = __bind(this.nextSlide, this);
      this.loop = __bind(this.loop, this);
      this.keyPress = __bind(this.keyPress, this);      $(window).keyup(this.keyPress);
      $('section:first-child').show().addClass('active');
      this.playing = false;
    }

    App.prototype.keyPress = function(event) {
      if (this.playing) {
        return this.playing = false;
      } else {
        this.playing = true;
        return this.loop();
      }
    };

    App.prototype.loop = function() {
      if (this.playing) {
        this.nextSlide();
        return setTimeout(this.loop, 20000);
      }
    };

    App.prototype.nextSlide = function() {
      var next;
      next = $('.active').next('section');
      if (next.length !== 0) {
        $('.active').hide().removeClass('active');
        return next.show().addClass('active');
      }
    };

    return App;

  })();

  $(function() {
    return window.app = new App;
  });

}).call(this);
