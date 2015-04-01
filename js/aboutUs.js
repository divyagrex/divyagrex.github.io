/**
 * Created by Admin on 2/2/15.
 */

$(document).ready(function(){

    $(".pictures img").on("click",function(){

        /*alert("hello");*/
       var active=$(this).hasClass("active");
        var nextPictures=$(this).parent().parent().next();
        var contain=nextPictures.hasClass("slide");
        if(contain==true && active==true){
            $(".slide").removeClass("slide");
            $(".active").removeClass("active");
            $(".show").removeClass("show");
        }

        else{
            $(".slide").removeClass("slide");
            /*nextPictures.addClass("slide");*/
            $(this).parent().parent().nextAll(".pictures").addClass("slide");
            $(".show").removeClass("show");

            $(this).next().addClass("show");
            $(".active").removeClass("active");
            $(this).addClass("active");

        }
    });

    $(".curtain").on("click",function(){
    	
    	var parent=$(this).parent();
    	var max=400;
parent.children().each(function(index, child) {
    child=$(child);
    var childPos=child.position();
    var childMax=childPos.top+child.outerHeight();
    if(childMax<max) {
        max=childMax;
        
    }
   
});
 console.log(max);
    	
        var active=$(this).prev().prev().hasClass("active");
        var nextPictures=$(this).parent().parent().next();
        var contain=nextPictures.hasClass("slide");
        var parent=$(this).parent().parent().hasClass("last");



        if(contain==true && active==true || (parent==true && active==true)){
            $(".slide").removeClass("slide");
            $(".curtain").removeClass("curtainShow");
            $(".active").removeClass("active");
            $(".show").removeClass("show");
            $()
        }

        else{
            $(".slide").removeClass("slide");
            nextPictures.addClass("slide");
            $(this).parent().parent().nextAll().addClass("slide");

            $(".show").removeClass("show");

            $(this).prev().addClass("show");
            $(".active").removeClass("active");

            $(this).prev().prev().addClass("active");

            $(".curtain").addClass("curtainShow");
            $(this).removeClass("curtainShow");
            var moveTo=$(this).parent().parent().prev();
            $('html, body').animate({
                scrollTop: moveTo.offset().top
            }, 1000);

        }
    });

    $("li").on("click",function(){
        /*alert("helo");*/
       $(this).nextAll().css("background","red");
    });

});