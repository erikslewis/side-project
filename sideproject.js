$( document ).ready(function(){
var timer = {
  seconds: 0,
  timerId: 0,
  run: false,

  clock: {
    timer: $("#timer"),
    reset: $("#reset"),
    start: $("#start"),
    pause: $("#pause"),
  },

  updateTime: function updateTime(){
    this.seconds++;
    this.clock.timer.text('Time elapsed: ' + this.seconds);
  },

  setupListeners: function () {
    this.clock.start.on('click', function() {
      console.log('start');
      this.clock.timer.text('Time elapsed: ' + this.seconds);
      if (this.run === false){
        this.timerId = setInterval(this.updateTime.bind(this), 1000);
        this.run = true;
      }
    }.bind(this));

    this.clock.pause.on('click', function() {
      clearInterval(this.timerId);
      this.run = false;
    }.bind(this));

    this.clock.reset.on('click', function() {
      this.seconds = 0;
      console.log('reset ' + this.seconds);
      clearInterval(this.timerId);
      this.run = false;
      this.clock.timer.text('Stop Watch');
    }.bind(this));
  }
}

timer.setupListeners();

$(function(){
    $("#show1").hide();
    $("#button1").on("click", function(){
        $("#hide, #show1").toggle(450);
    });
  });

$(function(){
    $("#show2").hide();
    $("#button2").on("click", function(){
    $("#hide, #show2").toggle(450);
    });
  });

$(function(){
    $("#show3").hide();
    $("#button3").on("click", function(){
    $("#hide, #show3").toggle(450);
    });
});

$(function(){
            $("#show4").hide();
            $("#button4").on("click", function(){
                $("#hide, #show4").toggle(450);
            });
            });
            $(function(){
                $("#show5").hide();
                $("#button5").on("click", function(){
                $("#hide, #show5").toggle(450);
                });
               });
                $(function(){
                    $("#show6").hide();
                    $("#button6").on("click", function(){
                    $("#hide, #show6").toggle(450);
                    });
                  });
                    $(function(){
                        $("#show7").hide();
                        $("#button7").on("click", function(){
                        $("#hide, #show7").toggle(450);

                        });
                      });
                    });
