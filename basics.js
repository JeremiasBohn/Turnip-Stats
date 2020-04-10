// Inputs

$(window).on( "load", function() {
	$('#purchase').hide();
});

$('.change-to-purchase').click(function() {
	$('#sale').hide();
	$('#purchase').show();
});
$('.change-to-sale').click(function() {
	$('#sale').show();
	$('#purchase').hide();
});

$('#fancy-inputs input[type="text"]').blur(function(){
  if($(this).val().length > 0){
    $(this).addClass('white');
  } else {
    $(this).removeClass('white');
  }
});

$('#fancy-inputs input[type="password"]').blur(function(){
  if($(this).val().length > 0){
    $(this).addClass('white');
  } else {
    $(this).removeClass('white');
  }
});

$('#fancy-inputs input[type="number"]').blur(function(){
  if($(this).val().length > 0){
    $(this).addClass('white');
  } else {
    $(this).removeClass('white');
  }
});

// Radios

$("#fancy-radio input[type=radio]").click(function() {
  $('label.radio').removeClass('selected');
  var inputID = $(this).attr('id');
  if ($(this).is(':checked')) {
    $('.' + inputID).addClass('selected');
  } else {
    $('.' + inputID).removeClass('selected');
  }
});


var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);

var today = now.getFullYear()+"-"+(month)+"-"+(day);
$('#date').val(today);
$('#date_purchase').val(today);

if (now.getHours() >= 5 && now.getHours() < 12) {
	$('#questions').prop("checked", true);
	$('label.questions').addClass('selected');
	
}
else {
	$('#photo').prop("checked", true);
	$('label.photo').addClass('selected');
}

$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});