
let completeBtn = document.querySelector("#submit");
function validate() {
  completeBtn.disabled = checkParams();
}

function checkParams() {
    let name = $.trim($('#name').val());
    let surname = $.trim($('#surname').val());
    let street = $.trim($('#street').val());





    if (name.length > 0 && surname.length > 0 && street.length > 0) {
        $('#submit').removeAttr('disabled');
    }else
           $('#submit').attr('disabled', 'disabled');
  }