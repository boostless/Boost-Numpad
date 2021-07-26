
var code = ''
var length = 4
var show = true
var c_code = ''
$(function() {
    window.onload = (e) =>{
        window.addEventListener('message', function(event) {
            code = event.data.code
            if(event.data.length > 4 || event.data.length <= 10){
              length = event.data.length
            }
            show = event.data.show
            switch (event.data.action) {
                case 'openui':
                  $('#display').text('Enter code')
                  $('#container').fadeIn();
                  break;
                case 'closeui':
                  $('#container').fadeOut();
                  c_code = '';
                  break;
                default:
                    break;
            }
        });

        $("#submit").click(function() {
            if(c_code == code){
              $.post('http://Boost-Numpad/SubmitCode', 'true');
            }else{
              $('#display').addClass('text-red-500')
              $('#display').text('Incorrect')
              c_code = '';
            }
        });

        $("#clear").click(function() {
          $('#display').removeClass('text-red-500')
          $("#display").html('')
          c_code = '';
        });

        document.onkeyup = function(event){
            if(event.key == "Escape"){
              $('#container').fadeOut();
              $.post('http://Boost-Numpad/CloseUI');
            }
        };
    }
});

function add(num){
    if(isNaN($("#display").text())){
      $("#display").html('')
      $('#display').removeClass('text-red-500')
    }
    if(getLenght() < length){
      if(show){
        $("#display").text($("#display").text()+num)
        c_code = c_code + num
      }else{
        $("#display").html($("#display").html()+'<i class="fas fa-circle fa-xs"></i>')
        c_code = c_code + num
      }
    }else{
      $("#display").html('')
    }
}

function getLenght(){
  if(show){
    return $("#display").text().length;
  }else{
    return $('#display').children().length;
  }
}


