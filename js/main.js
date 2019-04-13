jQuery(document).ready(function(){    //calling the function
    "use strict";  //prevents, for example, the use of undeclared variables; promots cleaner code
    $('#slider-cfsel').carouFredSel({
        responsive: true,
        width:'100%',
        circular: true,
        scroll:{
                items:1, //scrolls one item at a time
                duration:500, //after this number of milliseconds
                pauseOnHover:true //pause when mouse hovers
        },
        auto:true, //automatic sliding. u dont have to click inorder for it to slide
        items:
        {
            visible:{
                min:1, //minimum number of visible slides
                max:1 //maximum number of visible slides
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
        $("header").addClass('secondary');
    }
    else
        if($("header").hasClass('secondary')){
            $("header").removeClass('secondary');
        }
    });
});