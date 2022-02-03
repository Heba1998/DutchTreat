$(document).ready(function () {
    console.log("hi heba");


    var theForm = $("#theForm");
    theForm.hide();


    var buy = $("#buyButton");
    buy.on("click", function foo() {
        alert("you buy product ")
    });



    var product = $(".Ptroduct-props li");
    product.on("click", function () {
        console.log("you clicked on " + $(this).text());
    })




    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.slideToggle(1000);
    });

});






