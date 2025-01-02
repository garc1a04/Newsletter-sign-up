var hasMsgError = false;

mouseIn(".button1");
mouseIn(".button2");

function mouseIn(selector){
    $(selector).mousemove(function (e) { 
        $(selector).addClass("background-button");
    });

    $(selector).mouseleave(function () { 
        $(selector).removeClass("background-button");
    });
}

$("input").on("click", function () {
    $(this).addClass("input-border-click");
    $(this).removeClass('input-error');
});

sendEmail('.button','click');
sendEmail('input','keypress');

function sendEmail(selector, event){

    $(selector).on(event, function (e) {
        if(event == 'keypress' && e.key != 'Enter'){
            return;
        }

        verification($('input').val());
    });
}

$('.button2').click(function (e) { 
    resetPageInitial();
    resetPageSucess();
});

function resetPageInitial(){
    $('input').removeClass('input-error');
    $('input').val('');
    $('.message-Error').remove();
    hasMsgError = false;
}