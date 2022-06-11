  //a 태그들
  var Links ={
    setColor:function(color){
      // var alist = document.querySelectorAll('a');
      // var i=0;
      // while(i<alist.length){
      //     alist[i].style.color =color;
      //     i+=1;
      // }

      $('a').css('color', color);
  }


  }
  var Body ={
    setColor: function (color){
      // document.querySelector('body').style.color=color;
      $('body').css('color', color)
    },
    setBackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor', color)
    }
  }

  function nightDayHandler(self){

    var target = document.querySelector('body');
      if(self.value==='night'){

        Body.setBackgroundColor('black');
        self.value='day';
        Links.setColor('powderblue');
        Body.setColor('white');

      }else{

        Body.setBackgroundColor('white');
        self.value='night';
        Links.setColor('blue');
        Body.setColor('black');

    }
  }
