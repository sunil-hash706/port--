$("#projectList").slideUp();
$("#projectList").css("color","white");

$("#projets").mouseover(function(){
    $("#projectList").slideToggle();
})
$("#platform").slideUp();
$("#contactForm").slideUp();

$("#social").click(function(){
    $("#platform").slideToggle();
})

$("#form").click(function(){
    $("#contactForm").slideToggle();
})

    $("#skilli").slideUp();
    $("#hobbyi").slideUp();




$("#skillh").mouseover(function(){
    $("#skilli").slideDown("slow");
})


$("#hobby").mouseover(function(){
    $("#hobbyi").slideDown("slow");
})

