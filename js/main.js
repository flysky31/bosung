  $(document).ready(function () {
      $('#m_menu').tendina({
          animate: true, // 애니메이션 활성화
          
     });
  });






$(document).ready(function() {
     // 링크 클릭 시 경고창을 띄우는 이벤트 핸들러
     $(".CLink").click(function () {
      alert("준비중입니다.");
    });



    $(".tab-link").click(function() {
      var tabId = $(this).attr("data-tab");
  
      $(".tab-link").removeClass("active");
      $(".tab-content").removeClass("active");
  
      $(this).addClass("active");
      $("#" + tabId).addClass("active");
    });


    var swiper = new Swiper(".tab01_slide", {
        slidesPerView:1,
        centeredSlides: true,
        effect:"fade",
        fadeEffect: {
          crossFade: true
        },
        speed:1000,
          autoplay: {
           delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".tab01_slide .swiper-pagination",
          clickable: true,
        },       
        observer: true,
        observeParents: true,       
        // on: {
        //     slideChange: function () {
        //       // 슬라이드 변경 시 active 슬라이드 설정
        //       var activeSlide = this.slides[this.activeIndex];
        //       activeSlide.classList.add('active');
        
        //       // 다른 슬라이드는 active 클래스 제거
        //       var slides = this.slides.filter(slide => slide !== activeSlide);
        //       slides.forEach(slide => slide.classList.remove('active'));
        //     }
        //   }
      });

      var swiper = new Swiper(".tab02_slide", {       
        slidesPerView:1, 
        centeredSlides: true,
        effect:"fade",
        speed:1000,
         autoplay: {
           delay: 3500,
           disableOnInteraction: false,
         },
        pagination: {
          el: ".tab02_slide .swiper-pagination",
          clickable: true,
        },       
        observer: true,
        observeParents: true,  
      });


      $(".select_box").slideUp();
      //$(".global .select a").slideUp();
     
      $(".all .flex_box .tab_box .m_show a").click(function(){
        $(this).toggleClass("on");
        $(".all .flex_box .tab_box .m_show a i").toggleClass("on");
        if($(".all .flex_box .tab_box .m_show a").hasClass("on") === true){
          $(".select_box").slideDown();
          
        } else {
          $(".select_box").slideUp();
        }
    });


  //     $("#ceo_area .m_show a").click(function(){
  //         $(this).toggleClass("on");
  //         $("#ceo_area .m_show a i").toggleClass("on");
  //         if($("#ceo_area .m_show a").hasClass("on") === true){
  //           $(".select_box").slideDown();
            
  //         } else {
  //           $(".select_box").slideUp();
  //         }
  //     });

  //     $("#company_area .m_show a").click(function(){
  //       $(this).toggleClass("on");
  //       $("#company_area .m_show a i").toggleClass("on");
  //       if($("#company_area .m_show a").hasClass("on") === true){
  //         $(".select_box").slideDown();
          
  //       } else {
  //         $(".select_box").slideUp();
  //       }
  //   });

  //     $("#history_area .m_show a").click(function(){
  //       $(this).toggleClass("on");
  //       $("#history_area .m_show a i").toggleClass("on");
  //       if($("#history_area .m_show a").hasClass("on") === true){
  //         $(".select_box").slideDown();
          
  //       } else {
  //         $(".select_box").slideUp();
  //       }
  //   });


  //   $("#delos_area .m_show a").click(function(){
  //     $(this).toggleClass("on");
  //     $("#delos_area .m_show a i").toggleClass("on");
  //     if($("#delos_area .m_show a").hasClass("on") === true){
  //       $(".select_box").slideDown();
        
  //     } else {
  //       $(".select_box").slideUp();
  //     }
  // });

     $(".global").click(function(){
       $(this).toggleClass("on");
       
       $(".global .select button").toggleClass("on");       
       if ($(this).hasClass("on")) {
         $('#my-menu .fox').off("mouseover");
        
       } else{
         $('#my-menu .fox').mouseover(
           function() {
               $(this).find('.s_first').show();           
         }     
       );
       }
   });      
});

  
//   $(document).ready(function() {
//     // Hide all submenus and right side initially
//     $('.s_first').hide();
//     $('.right').hide();

//     // When hovering over a menu item
//     $('#my-menu .f_gnb').mouseover(
//         function() {
//             // Hide all other submenus and right side
//             $('.s_first').hide();
//             $('.right').hide();

//             // Show the submenu of the hovered menu item
//             $(this).find('.s_first').show();
//             $(this).find('.right').show();
//         },
//         function() {
//             // Hide the submenu when mouse leaves the menu item
//             $(this).find('.s_first').hide();
//             $(this).find('.right').hide();
//         }
//     );
// });
