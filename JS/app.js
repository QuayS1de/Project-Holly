$(document).ready(function(){
    $('.slider').slick({
        arrows:false, //если не нужны по дизайну
        dots:false,
        adaptiveHeight:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }
        ]

    });
    
    
    $(function () {
        const page = $('#page');
        const contentRightInnerOffset = $('#content__right-inner').offset().top;
        const asideFixedTopClassName = 'aside-fixed-top';
        const asideFixedBottomClassName = 'aside-fixed-bottom';
        const contenrRightInner = $('#content__right-inner');
        
        $(window).scroll(function(){
            const scrolled = $(this).scrollTop();
            if (scrolled > contentRightInnerOffset){
                //добавляем класс
                page.addClass(asideFixedTopClassName)
            }
            else if ((scrolled < contentRightInnerOffset)){
                //снимаем класс
                page.removeClass(asideFixedTopClassName)
            }
            

            const bottomFixedPoint = $(document).height() - (contenrRightInner.height() + $('.lower-sidebar').height()) - func();

            
            if(scrolled > bottomFixedPoint){
            //прилипание к низу   
                page.removeClass(asideFixedTopClassName);
                page.addClass(asideFixedBottomClassName);
                                                                                
                contenrRightInner.css({
                    top: bottomFixedPoint - $('#content__right').offset().top
                })
            }
            else if (page.hasClass(asideFixedBottomClassName) && (scrolled < bottomFixedPoint)){
            //отлипание от низа
                page.removeClass(asideFixedBottomClassName);
                page.addClass(asideFixedTopClassName);
                contenrRightInner.css({
                    top: 'auto'
                })
            }
        })
        function func(){
            if (window.innerWidth > 1550){
                return 2148;    
            }

            else if ((window.innerWidth >= 1150) && (window.innerWidth <= 1550)){
                return 2760;
            }
            else if ((window.innerWidth > 1000) && (window.innerWidth < 1150)){
                return 3055;
            }
        }
    })
    
        $(document).on('click', '.header-search-bar', function(e){
            $('.unactive-form').removeClass('display-none');
//            $('.unactive-form').css('opacity', '0.95');
//            timeOfOpacity(0.1);
        })
    
    
//    function timeOfOpacity(valueOfOpacity){
//        let num = 0;
//        setInterval(function(){
//            
//            if (num < 0.95){
//                num = num + valueOfOpacity;
//            }
//            
//            $('.unactive-form').css('opacity', num);
//        }, 5)
//        
//    }
    
        $(document).on('click', '.unactive-form i', function(e){
            $('.unactive-form').addClass('display-none');
        })
    
    if (window.innerWidth > 1000){
        $(document).on('click', '.header-sidebar i', function(e){
            $('.content__right2').removeClass('display-none2');
            $('.dark-block').css('display', 'block');

        })

        $(document).on('click', '.content__right2 .fa-times', function(e){
            $('.content__right2').addClass('display-none2');
            $('.dark-block').css('display', 'none');
        })

        $(document).on('click', '.dark-block', function(e){
            $('.content__right2').addClass('display-none2');
            $('.dark-block').css('display', 'none');
        })
    }
    
    
    if (window.innerWidth <= 1000){
        $(document).on('click', '.header-sidebar i', function(e){
            $('.content__left').removeClass('display-none3');
            $('.dark-block').css('display', 'block');

        })

        $(document).on('click', '.content__left .fa-times', function(e){
            $('.content__left').addClass('display-none3');
            $('.dark-block').css('display', 'none');
        })

        $(document).on('click', '.dark-block', function(e){
            $('.content__left').addClass('display-none3');
            $('.dark-block').css('display', 'none');
        })
    }
    


    new WOW().init();
    

    
    /*Плавная прокрутка страницы*/
    const anchor = document.querySelector('i[href="#top"]');
    
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
    
    /*----------------------------*/
    
    
    
    
    
    
    
    
    
    

//    
})