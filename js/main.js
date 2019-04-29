

    $(document).ready(function () {

        $('#phone').mask('+7 (999) 999-99-99');

        $("#button").click(
            function () {
                var name = $.trim($("#name").val());
                var phone = $.trim($("#phone").val());



                if(name.length === 0 || phone.length === 0)
                {
                    if(name.length === 0) {
                        lightFileds('name');
                    }

                    if(phone.length === 0) {
                        lightFileds('phone');
                    }



                    $('#result').html("Вы заполнили не все обязательные поля!").css("color", "red");
                    return false;

                }
                else {
                    sendAjaxForm('result', 'contactForm', 'modules/handler.php');
                    return false;
                }
            }
        );
    });


$('#closeForm').click(function () {
    resetFields();
});

$(document).mouseup(function (e) {
  var div = $('#exampleModal');
  if(!div.is(e.target)
    && div.has(e.target).length === 0) {
      resetFields();
         }
    });


    function sendAjaxForm(result_form, ajax_form, url) {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: $("#" + ajax_form).serialize(),
            success: function (response) {
                resetFields();
                $('#exampleModal').modal("hide");
                $('#successModal').modal("show");
            },
            error: function (response) {
                $('#result').html('Ошибка. Данные не отправлены').css("color", "red");
            }
        })

}

function lightFileds(fname) {
    $('#'+fname).addClass('req');
    setTimeout(function () {
        $('#'+fname).removeClass('req');
    }, 1000);
}

function resetFields() {
    $('#result').html('');
    $('#name').val('');
    $('#phone').val('');
    $('#message').val('');
}