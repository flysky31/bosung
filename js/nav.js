$(document).ready(function() {
    $(window).scroll(function() {
        // 스크롤 위치를 가져옵니다.
        var scroll = $(window).scrollTop();

        // 스크롤 위치가 100px 이상이면 클래스를 추가합니다. 원하는 위치로 조정 가능합니다.
        if (scroll >= 100) {
            $('#header').addClass('sticky-header');
        } else {
            $('#header').removeClass('sticky-header');
        }
    });

    var burger = $('.menu-trigger');

    burger.each(function(index){
	var $this = $(this);
	
	$this.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active-' + (index+1));
        $("#aside").toggleClass("on");
        $("body").toggleClass("on");
	})

    window.addEventListener("resize", function() {
        
        // 현재 화면 크기를 확인하여 on 클래스를 제거
        if (window.innerWidth >= 1024) {
            document.body.classList.remove("on");
            $("aside").removeClass("on");
         
            $(".menu-trigger").removeClass("active-1");
        }
    });
});


   
    $('.s_first').hide();
    $('#my-menu .fox').mouseover(
        function() {
          let tab =  $(this).find('a.first').data("tab");   
          
          $('.s_first').removeClass('active');        
            $(this).find('.s_first').show();  
            
          }     
    );
    
    $('#my-menu .fox').hover(
        function() {
            // 마우스 오버한 경우
            $(this).addClass("on");
        },
        function() {
            // 마우스 벗어난 경우
            $(this).removeClass("on");
        }
    );
    

    $('#my-menu .fox').mouseout(
      function() {  
        $('.box a').removeClass('active');  
        let tab =  $(this).find('a.first').data("tab");   
          $('.s_first').hide();
 
      }   
  );
  });
  
  
  $(document).ready(function() {
    $(".tab-pane").hide();
  // 탭 요소에 대한 마우스 오버 이벤트 처리
  $(".s_first .left .box a.first[data-tab='tab1']").addClass("active");
  $(".s_first .left .box a.first[data-tab='tab6']").addClass("active");
  $(".s_first .left .box a.first[data-tab='tab11']").addClass("active");
  
  
      $(".s_first .left .box a").mouseover(function() {
        // $(this).find('.s_first').addClass('active'); 
        let tab =  $(this).data("tab");
        
        $(".box a").removeClass("active");
          //var tabId = $(this).data("tab"); // data-tab 속성 값을 가져옴
          $(this).addClass('active');

  
          // 해당 탭에 대한 tab-pane 표시
          $(".tab-pane").hide();
          //$("#" + tab).addClass("active");
          $("#" + tab).show();
            if($(this).hasClass("active")){
              //$(this).parent().parent().parent().find(".right .tab-content .tab-pane").show();
            }
          });
         
  });




  

// 애니메이션 동작
function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();
    console.log(_wH);
    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){
    // 애니메이션 동작
    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});



$(document).ready(function() {
    function resizeCircle() {
        var width = $('.radius').width();
        $('.radius').css('height', width);
    }

    // Initial resize
    resizeCircle();

    // Resize on window resize
    $(window).resize(function() {
        resizeCircle();
    });
});