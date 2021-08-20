$(document).ready(function(){
 
    //toggle sub nav
    $("nav.global li:nth-child(2)").click(function(){
        $(this).toggleClass('selected');
        $(this).next('.sub').toggleClass('visible');
    });

    //initiate slick slider
    $('#slide').slick({
        arrows: false,
        dots: true,
        draggable: false,
        lazyLoad: 'ondemand',
        swipe: false, 
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i]).find('[data-title]').data('title');
            return ''+title+'';
        }
    });

    //setup table of contents toggle
    $('.toc').on('click', function() {
        $('.slick-dots').toggleClass('open');
      });
      
      $('.slick-dots li').on('click', function() {
        $('.slick-dots li').removeClass('selected');
        $(this).addClass('selected');
        $('.toc').removeClass('open').text( $(this).text() );
      });
      
      $(document).on('keyup', function(evt) {
        if ( (evt.keyCode || evt.which) === 27 ) {
          $('.slick-dots').removeClass('open');
        }
      });
      
      $(document).on('click', function(evt) {
        if ( $(evt.target).closest(".toc").length === 0 ) {
          $('.slick-dots').removeClass('open');
        }
      });

 


    //global style pannel functionality setup
    function styleChange_global(){

        //font-style 
        $('.radio-group.style li:first-child').click(function() {
            $(".slick-slide.slick-current, #folio, nav, .slick-dots").css({
                "font-family": "'OccupantOldstyleRoman'"
            });	
        });
        $('.radio-group.style li:nth-child(2)').click(function() {
            $(".slick-slide.slick-current, #folio, nav, .slick-dots").css({
                "font-family": "'OccupantOldstyleItalic'"
            });	
        });

        //slider-weight
        $('.axis-range').on('input', function(){

            let value = parseInt($(this).val()); //get slider input value
            // console.log(value);

            const slidertype = $(this).data('type'); //get slider axis

            console.log("--"+slidertype, value );
            $(".slick-slide.slick-current, #folio, nav, .slick-dots").css("--"+slidertype, value);

        });

        //font-size
        $('.axis-size').on('input', function(){

            let value = parseInt($(this).val()); //get slider input value
            $(".slick-slide.slick-current").css({
                fontSize: value + "px"
            });

        });

        //bg-color
        $('.radio-group.bg-color li:first-child').click(function() {
            $("main").css({    
                "background-image": "linear-gradient(to right, #7C7C79 0%, var(--white) 4%)",
                // "background-color": "#F2F2EC",
            });	
            $(".slick-slide.slick-current, #folio").css({
                "color" : "#161616"
            });	
            $('.slick-dots').css({
                "color" : "#161616",
                "background-color": "#F2F2EC",
            });	
            $('.toc').css({
                "border" : "solid 1px #161616"
            });
        });
        $('.radio-group.bg-color li:nth-child(2)').click(function() {
            $("main").css({            
                "background-image": "linear-gradient(to right, #7C7C79 0%, black 4%)",
                // "background-color": "black",
            });
            $(".slick-slide.slick-current, #folio").css({
                "color" : "#F2F2EC"
            });	
            $('.slick-dots').css({
                "color" : "#F2F2EC",
                "background-color": "black",
            });	
            $('.toc').css({
                "border" : "solid 1px #F2F2EC"
            });
        });
        $('.radio-group.bg-color li:nth-child(3)').click(function() {
            $("main").css({            
                "background-image": "linear-gradient(to right, #7C7C79 0%, white 4%)",
            });	
            $(".slick-slide.slick-current, #folio").css({
                "color" : "#161616"
            });	
            $('.slick-dots').css({
                "color" : "#161616",
                "background-color": "white",
            });	
            $('.toc').css({
                "border" : "solid 1px #161616"
            });
        });
        $('.radio-group.bg-color li:nth-child(4)').click(function() {
            $("main").css({    
                "background-image": "linear-gradient(to right, #7C7C79 0%, #DCE1C5 4%)",        
                // "background-color": "#DCE1C5",
            });	
            $(".slick-slide.slick-current, #folio").css({
                "color" : "#161616"
            });	
            $('.slick-dots').css({
                "color" : "#161616",
                "background-color": " #DCE1C5",
            });	
            $('.toc').css({
                "border" : "solid 1px #161616"
            });
        });

        //line-spacing
        $('.radio-group.lspacing li:first-child').click(function() {
            $(".slick-slide.slick-current").css({
                "line-height": "1.5rem"
            });	
        });
        $('.radio-group.lspacing li:nth-child(2)').click(function() {
            $(".slick-slide.slick-current").css({
                "line-height": "2rem"
            });	
        });
        $('.radio-group.lspacing li:nth-child(3)').click(function() {
            $(".slick-slide.slick-current").css({
                "line-height": "3rem"
            });	
        });

        //margin
        $('.radio-group.margin li:first-child').click(function() {
            $(".slick-slide.slick-current").css({
                "padding" : "3rem"
            });	
        });
        $('.radio-group.margin li:nth-child(2)').click(function() {
            $(".slick-slide.slick-current").css({
                "padding" : "1.5rem"
            });	
        });
        $('.radio-group.margin li:nth-child(3)').click(function() {
            $(".slick-slide.slick-current").css({
                "padding" : ".5rem"
            });	
        });

        //screensize
        $('nav li.screen-size input[type=radio]').click(function() {
            $("nav li.screen-size input[type='radio']:checked").each(function() {
                var screenSize = $(this).data('screen');
                $('main').removeClass().addClass(screenSize).removeAttr("style");
            });
        });
    }

    //WIP: update current slide style when switch slide
    function updateChange(){
            // $(".slick-slide.slick-current").addClass('newstyle');
            
            // $('li[role="presentation"]').click(function() {
                
            // });
    }
       
    styleChange_global();
    updateChange();

      
      
    //inline style pannel functionality setup

    //*selected text*//
    
    function getSelectedText() {
        var text = "";
        if (typeof window.getSelection != "undefined") {
            text = window.getSelection().toString();
        } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
            text = document.selection.createRange().text;
        }
        return text;
    }
    
    function highlightSelectedText() {
        var selectedText = getSelectedText();

        if (selectedText) {
            console.log(selectedText);
            // $('.sub.inline').addClass('show');

            // console.log(selectedText);
            // alert("Got selected text " + selectedText);
    
        }
    }
    //pause for now
    //    $('main').mousedown(function(e) { 
    //         highlightSelectedText();
    //         // detectMouseCursor();
    //         // console.log('drag');
    //         var x = e.clientX;
    //         var y = e.clientY;
    //         $('nav.inline').css ({
    //             'display': 'block',
    //             'top' : y + 'px',
    //             'left' : x + 'px'
    //         });
    //    });
   
  

 

    //about menu toggle 
    $("nav li#about").click(function(){
        $("section#info").addClass('visible');
        $('body').addClass('lock-scroll');
        $(".menutoggle-bg").addClass('show');
    });

    $(".menutoggle-bg").click(function(){
        $("section#info").removeClass('visible');
        $('body').removeClass('lock-scroll');
        $(this).removeClass('show');
    });




    //setup cover height
    function coverHeight() {
            console.log('cover');
            var bookHeight = $('main').height();
            var contentHeight= bookHeight * 0.9;
            $('#cover').css({ 
                'height': contentHeight,
                'display':'flex' 
            }); 
            $('div[data-slick-index=0]').css({ 
                'height': contentHeight
            }); 
            $('#slide').slick({
                adaptiveHeight: false
            });   
        $('.slick-list').css({ 
                'height' : contentHeight,
                'overflow':'hidden'
            }); 
        }
   

    coverHeight(); //on landing

    if ($('div[data-slick-index=0]').hasClass('slick-active')){
        coverHeight(); //on cover slide
    }

});


