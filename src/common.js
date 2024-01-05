import $ from 'jquery'


var d = $('.animated')
d.each(function (i, v) {
  $(this).waypoint(function () {
    $(v).addClass('on')
  }, {
    offset: '100%'
  })
})

$(window).bind('scroll load orientationchange reload resize ready', function() {
    var win = $(window).scrollTop() + $(window).height();


  $('.fade-up, .fade-in').each(function(){
    if(win > $(this).offset().top ){
      $(this).addClass("on");
    }else{
      $(this).removeClass("on");
    }
  });

  $('.fade-g').each(function(){
    if(win > $(this).offset().top ){
      $(this).addClass("on");
      $(this).find("> *").each(function(i){
        $(this).delay(i*250).queue(function(){
            $(this).addClass("on").dequeue();
        }); //('transition-delay', '.' + (i*18) + 's');
       });
    }else{
      $(this).removeClass("on");
      $(this).find("> *").each(function(i){
        $(this).removeClass("on");
      });
    }
  })
})


let section = ".section";
  let sectionArray = new Array;
  let sectionCount = 0;

  $(section).each(function(i){
    sectionArray[i] = $(this).offset().top;
  });

  const scrollAnimateExec = (moveTop) => {
    $("html,body").stop().animate({ scrollTop: moveTop + 'px'}, 800,"easeInOutCubic");
  }

  $('.gnb a').on('click', function(){
    let menu_chk = $(this).attr('href');
    sectionCount = menu_chk.replace('#section', '');
    // page move
    scrollAnimateExec( sectionArray[ sectionCount ] );
  });


  $(window).on('load resize', function (){
    let scltop = $(window).scrollTop();
    $(section).each(function (index){
      let $target   = $(section).eq(index),
      i         = $target.index(),
      targetTop = $target.offset().top;
      if (targetTop <= scltop) {
        $('body').removeClass();
        $('body').addClass('sec'+i);
        $('.gnb li').removeClass('active');
        $('.gnb li').eq(i).addClass('active');
      }
    })
  });

  $(window).scroll(function(){
    //manu navigation
    let scltop = $(window).scrollTop();
    $(section).each(function (index){
      let $target   = $(section).eq(index),
      i         = $target.index(),
      targetTop = $target.offset().top - 100;
      if (targetTop <= scltop) {
        $('body').removeClass();
        $('body').addClass('sec'+i);
        $('.gnb li').removeClass('active');
        $('.gnb li').eq(i).addClass('active');
      }
    })
    
  });