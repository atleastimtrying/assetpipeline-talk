App = class App
  constructor: ->
    $(window).keyup @keyPress
    $('section:first-child').show().addClass 'active'
    @playing = no

  keyPress : (event)=>
    if @playing
      @playing = no
    else 
      @playing = yes
      @loop()

  loop: =>
    if @playing
      @nextSlide()
      setTimeout @loop, 20000 

  nextSlide: =>
    next = $('.active').next('section')
    if next.length isnt 0
      $('.active').hide().removeClass 'active'
      next.show().addClass 'active'

$ ->
  window.app = new App