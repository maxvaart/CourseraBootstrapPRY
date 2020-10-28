$(document).ready(function(){
    $("#mycarousel").carousel({
        interval: 1500
        });
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        } else {
        $("#mycarousel").carousel("cycle");
        $("#carouselButton").children("span").removeClass("fa-play");
        $("#carouselButton").children("span").addClass("fa-pause");
    }
    });

    $("#btnLogin").click(function(){
        $("#loginModal").modal("show");
    });
    $("#close").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#cancel").click(function(){
        $("#loginModal").modal("hide");
    });

    $("#btnReserve").click(function(){
        $("#reserveModal").modal("show");
    });
    $("#closeR").click(function(){
        $("#reserveModal").modal("hide");
    });
    $("#cancelR").click(function(){
        $("#reserveModal").modal("hide");
    });
})