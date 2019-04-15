// JavaScript Document
$(document).ready(function () {
    $(".btn-suspend").on("click",(function () {
            $(".suspend-tips").show();
        })
    );
    $(".btn-close,.btn-cancel").on("click",(function () {
            $(this).parents(".tips-box").hide();
        })
    );
    $(".btn-open").on("click",(function () {
            $(".open-tips").show();
        })
    );
    $(".rule-lib a").on("click",(function () {
            var cname = $(this).attr('class');
            if (cname == 'cur') {
                $(this).removeClass("cur")
            }else {
                $(this).addClass("cur")
            }
        })
    );
    $(".rule-add-input a").on("click",(function () {
            let inputRule = $(this).siblings("input").val();
            if (inputRule !==""){
                $(this).parent().siblings(".rule-add-list").append(
                    "<dd>"+inputRule+"<a href=\"javascript:;\" class=\"rule-add-list-del\"></a></dd>"
                );
            }
        })
    );
    $(".rule-add-list").on("click",".rule-add-list-del",(function () {
        $(this).parent().remove();
        })
    );



});








