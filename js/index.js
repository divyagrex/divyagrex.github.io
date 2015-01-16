/**
 * Created by Amritansh on 1/15/2015.
 */

$(document).ready(function(){

    var login=0;
    var dropDown=0;
   $(".LoginPush").on("click",function(){
       /*alert("hel");*/
        if(login==0) {
            $(".mainText").addClass("moveLeft");
            $(".loginFormPage").removeClass("moveRight");
            login=1;
        }

       else{
            $(".mainText").removeClass("moveLeft");
            $(".loginFormPage").addClass("moveRight");
            login=0;

        }
   });


    $(".demoButton").on("click",function(){
        if(dropDown==0) {
            $(".dropDown").addClass("openDropdown");
            $(".glyphicon-chevron-down").addClass("glyphicon-chevron-up");
            $(".glyphicon-chevron-down").removeClass("glyphicon-chevron-down");
            dropDown=1;
        }

        else{
            $(".dropDown").removeClass("openDropdown");
            $(".glyphicon-chevron-up").addClass("glyphicon-chevron-down");
            $(".glyphicon-chevron-up").removeClass("glyphicon-chevron-up");
            dropDown=0;
        }
    });


    /*carousel*/

    $(".carousel-indicators").on("click","li", function () {
       $(".active1").removeClass("active1");
        $(this).addClass("active1");
    });

    /*end carousel*/
});
