

var bg=[".bg1",".bg2"];
var index=0;



$(document).ready(function(){

    function changeBg(){
        $(".active").removeClass("active");
        $(bg[index]).addClass("active");
        index++;

        if(index==2){
            index=0;
        }

    }

     setInterval(changeBg,5000);


    var login=0;
    var reg=0;
    var dropDown=0;

    /* changing bg*/



    /* end changing bg*/


   $(".LoginPush").on("click",function(){
       /*alert("hel");*/
        if(login==0) {
            $(".mainText").addClass("moveLeft");
            $(".loginFormPage").removeClass("moveRight");
            $(".registerPage").removeClass("moveReg");
            login=1;
            reg=0;
        }

       else{
            $(".mainText").removeClass("moveLeft");
            $(".loginFormPage").addClass("moveRight");
            login=0;

        }
   });

    $(".registerPush").on("click",function(){
        /*alert("hel");*/
        if(reg==0) {
            $(".mainText").addClass("moveLeft");
            $(".registerPage").addClass("moveReg");
            $(".loginFormPage").addClass("moveRight");

            console.log("not");
            reg=1;
            login=0
        }

        else{
            $(".mainText").removeClass("moveLeft");
            $(".registerPage").removeClass("moveReg");
            reg=0;

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
