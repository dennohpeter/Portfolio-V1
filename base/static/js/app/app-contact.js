var contact_form = document.getElementsByClassName('required');
var contact_data =  document.getElementById('contact_form');
var input__fields = document.querySelectorAll('.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea');
var submit = document.getElementById('submit');
var text_field = document.querySelectorAll('.contact-form input[type="text"]');
var email_field = document.querySelector('.contact-form input[type=email]');
var textarea_field = document.querySelector('.contact-form textarea');

submit.addEventListener('click', function(event) {
  event.preventDefault();
  validate();
  if(contact_form.length  > 0 ){
    alertify.error(msg1);
  }
  else {
    // alertify.log(msg2);
    console.log(path);
    post(path + "mail.php", contact_data,function(data ) {
      console.log(data);
      if(data == '11'){

        alertify.success(msg3);

        contact_form.classList.remove('required');
        input__fields.val('');

      }else {

        contact_form.classList.remove('required');
        input__fields.val('');
        alertify.error(msg4);
      }
    } );
  }
}, false);

for(i=0; i<input__fields.length; i++){
  input__fields[i].addEventListener('keyup', function(event) {
    validate();
  }, false);
}

function validate(){
  if(email_field.value.trim() == '' || !validateEmail(email_field.value)){
    email_field.parentNode.classList.add('required');
  }
  else {
    email_field.parentNode.classList.remove('required');
  }

  if(text_field[0].value.trim().length < 3){

    text_field[0].parentNode.classList.add('required');

  }else{
    text_field[0].parentNode.classList.remove('required');

  }
  if(text_field[1].value.trim().length < 3){

    text_field[1].parentNode.classList.add('required');

  }else{
    text_field[1].parentNode.classList.remove('required');

  }
  if(textarea_field.value.trim() == ''){

    textarea_field.parentNode.classList.add('required');

  }else{
    textarea_field.parentNode.classList.remove('required');

  }
}
function post(url, data, success){
  var content = typeof data == 'string' ? data : Object.keys(data).map(
    function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
  ).join('&');
  var request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  request.open('POST', url);
  request.onreadystatechange = function() {
    if (request.readyState>3 && request.status==200) { success(request.responseText); }
  };
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send(content);
  return request;
}
function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
