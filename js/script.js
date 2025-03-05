$(function(){
    let isGnbAreaVisible = false;

    function handleResize() {
        const gnbArea = $('.gnb-area');
        if ($(window).width() > 1400) {
            gnbArea.show();
            $('.gnb_nav .depth1>a').show();
            $('.gnb-nav').addClass('pc');

            gnbArea.css('padding-top', '');
        } else {
            gnbArea.hide();
            $('.gnb_nav .depth1>a').hide();
            $('.gnb-nav').removeClass('pc');
        }
    }

    handleResize(); 
    $(window).on('resize', function(){ handleResize();
        if ($(window).width() > 1400) {
            $('.gnb-area').css('padding-top', ''); 
        }
    });

    $('#header').hover(
        function(){
            if($(window).width() > 1400){
                $('.headbg').stop(0).slideDown(200);
                $('.logo-change').attr('src', 'imgs/logo2.png'); 
                $('.right-box .gnb_all_menu img').attr('src', './imgs/menu2.png');
                $('.language ul > li:first-child > a').css('color', '#000');
                $('.language ul > li:nth-child(2) > a').css('color', '#7d7d7d');
                $('.gnb-nav.pc>.depth1 a').css('color', '#000');
                $('.right-box .cbtn').css('border', '1px solid #000');
                $('.right-box .cbtn > p').css('color', '#000');
            }
        },
        function(){
            if($(window).width() > 1400){
                $('.headbg').stop(0).slideUp(200);
                $('.right-box .gnb_all_menu img').attr('src', './imgs/menu2.png');
                $('.gnb-nav.pc>.depth1 a').css('color', '#111');

                if ($(window).scrollTop() === 0) {
                    $('.logo-change').attr('src', 'imgs/logo1.png'); 
                    $('.gnb-nav.pc > .depth1 > a').css('color', '#fff');
                    $('.right-box .gnb_all_menu img').attr('src', './imgs/menu.png');
                    $('.language ul > li:first-child > a').css('color', '#fff');
                    $('.language ul > li:nth-child(2) > a').css('color', 'rgba(255,255,255,0.55)');
                    $('.right-box .cbtn').css('border', '1px solid #fff');
                    $('.right-box .cbtn > p').css('color', '#fff'); 
                }
            }
        } 
    ); 

    //스크롤 시 헤더 변경

    $(window).scroll(function() {
        if(isGnbAreaVisible){
            return;
        }

        if ($(this).scrollTop() > 0) {
            $('#header').css('background-color', 'white'); 
            $('#header .logo-change').attr('src', './imgs/logo2.png');
            $('.right-box .gnb_all_menu img').attr('src', './imgs/menu2.png');
            $('.right-box .cbtn .contact').css('color', 'black');
            $('.right-box .cbtn').css('border', '1px solid #000');
            $('.gnb-nav.pc > .depth1 >a').css('color', '#000');
            $('#header .right-box > .language ul > li:first-child > a').css('color', '#000');
            $('#header .right-box > .language ul > li:nth-child(2) > a').css('color', '#0000008c');
        } else {
            $('#header').css('background-color', 'transparent');
            $('#header .logo-change').attr('src', './imgs/logo1.png');
            $('.right-box .gnb_all_menu img').attr('src', './imgs/menu.png');
            $('.right-box .cbtn .contact').css('color', '#fff');
            $('.right-box .cbtn').css('border', '1px solid #fff');
            $('.gnb-nav.pc > .depth1 >a').css('color', '#fff');
            $('#header .right-box > .language ul > li:first-child > a').css('color', '#fff');
            $('#header .right-box > .language ul > li:nth-child(2) > a').css('color', '#ffffff8c');
        }
    });
    
    //모바일
    let isLogoTwo = false;
    $('.gnb_all_menu').click(function(){
        if($(window).width() < 1400){
            $('.gnb-area').toggleClass('show');
            $('.gnb-area').toggle();
            isGnbAreaVisible = !isGnbAreaVisible;
            
            if (isLogoTwo) {
            $('.logo-change').attr('src', 'imgs/logo1.png'); 
            $('.gnb_all_menu img').attr('src', 'imgs/menu.png'); 
            $('.cbtn p').css('color','#ffffff');
            $('.right-box .cbtn').css('border', '');
            $('#header').css('background-color','')
            } else {
                $('.logo-change').attr('src', 'imgs/logo2.png'); 
                $('.gnb_all_menu img').attr('src', 'imgs/menu2.png'); 
                $('.cbtn p').css('color','#000000');
                $('.right-box .cbtn').css('border', '1px solid #000');
                $('#header').css('background-color','#f4f4f4')
            }
            isLogoTwo = !isLogoTwo;
        } else{
            
        }
    })
    $('.gnb-wrap .depth1>a').on('click', function(e) {
        e.preventDefault(); // 링크 기본 동작 방지
        const $depth1 = $(this).parent();
        $depth1.toggleClass('on'); 
        $depth1.find('.dept2-wrap').stop().slideToggle(); 
    });

    //sec2 클릭이동 스크립트//
    function moveToPrevSec2() {
        const marginValue = $(window).width() > 1400 ? 445 : 415;
        $('#sec2 .cardnews-wrap').stop().animate({ marginLeft: `+=${marginValue}` }, 300, function () {
            $(this).css('margin-left', '0px').prepend($(this).find('li:last-child'));
        });
    }
    
    // 다음으로 이동하는 배너 (sec2)
    function moveToNextSec2() {
        const marginValue = $(window).width() > 1400 ? 445 : 415;
        $('#sec2 .cardnews-wrap').stop().animate({ marginLeft: `-=${marginValue}` }, 300, function () {
            $(this).css('margin-left', `-${marginValue}px`).append($(this).find('li:first-child'));
        });
    }
    
    // 이전 버튼 클릭 (sec2)
    let firstClick = true;
    $('#sec2 .btn-prev').click(function (e) {
        e.preventDefault();
        moveToPrevSec2();
    });
    
    // 다음 버튼 클릭 (sec2)
    $('#sec2 .btn-next').click(function (e) {
        e.preventDefault();
        const marginValue = $(window).width() > 1400 ? 445 : 415;

        if (firstClick) {
            // 첫 클릭일 때 세 번째 li를 두 번째로 이동
            const $cardNewsWrap = $('#sec2 .cardnews-wrap');
            const $secondItem = $cardNewsWrap.find('li:nth-child(2)');
            
            $cardNewsWrap.stop().animate({ marginLeft: `-=${marginValue}` }, 300, function () {
            $secondItem.insertAfter($cardNewsWrap.find('li:first-child')); 
            $(this).css('margin-left', `-${marginValue}px`);
        });
            firstClick = false;
        } else {
            moveToNextSec2(); // 이후 클릭에는 원래 함수 실행
        }
    });

    
    //sec3 클릭이동 스크립트//
    let prevFirstClickSec3 = true;
    let nextFirstClickSec3 = true;
    function moveToPrevSec3() {
        $('#sec3 .cardnews-wrap').animate({ marginLeft: '+=415' }, 300, function () {
            if(prevFirstClickSec3){
                prevFirstClickSec3 = false;
            } else{
                $(this).css('margin-left', '-415px').prepend($(this).find('li:last-child'));
            }
            $(this).css('margin-left','0px')
        });
    }
            
    // 다음으로 이동하는 배너 (sec3)
    function moveToNextSec3() {
        $('#sec3 .cardnews-wrap').animate({ marginLeft: '-=415' }, 300, function () {
            if(nextFirstClickSec3){
                nextFirstClickSec3 = false;
            }else{
            $(this).css('margin-left', '-415px').append($(this).find('li:first-child'));
            }
        });
    }
            
    // 이전 버튼 클릭 (sec3)
    $('#sec3 .btn-prev').click(function (e) {
        e.preventDefault();
        moveToPrevSec3();
    });
            
    // 다음 버튼 클릭 (sec3)
    $('#sec3 .btn-next').click(function (e) {
        e.preventDefault();
        moveToNextSec3();
    });

    //sec4 클릭이동 스크립트//
    let prevFirstClickSec4 = true;
    let nextFirstClickSec4 = true;
    function moveToPrevSec4() {
        $('#sec4 .cardnews-wrap').animate({ marginLeft: '+=415' }, 300, function () {
            if(prevFirstClickSec4){
                prevFirstClickSec4 = false;
            } else{
                $(this).css('margin-left', '-415px').prepend($(this).find('li:last-child'));
            }
            $(this).css('margin-left','0px')
        });
    }
            
    // 다음으로 이동하는 배너 (sec4)
    function moveToNextSec4() {
        $('#sec4 .cardnews-wrap').animate({ marginLeft: '-=415' }, 300, function () {
            if(nextFirstClickSec4){
                nextFirstClickSec4 = false;
            }else{
            $(this).css('margin-left', '-415px').append($(this).find('li:first-child'));
            }
        });
    }
            
    // 이전 버튼 클릭 (sec4)
    $('#sec4 .btn-prev').click(function (e) {
        e.preventDefault();
        moveToPrevSec4();
    });
            
    // 다음 버튼 클릭 (sec4)
    $('#sec4 .btn-next').click(function (e) {
        e.preventDefault();
        moveToNextSec4();
    });
});
