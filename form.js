$(function() {

	// Get the form.
	var form = $('#turnip_form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData,
			beforeSend: function() {
				$('#button_field').hide();
				$('#loading').addClass('loader');
			},
			complete: function() {
			$('#button_field').show();
			$('#loading').removeClass('loader');
			}
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#user').val('');
			$('#password').val('');
			$('#price').val('');
			$('#date').val('');
			$('#photo').prop('checked', false);
			$('#questions').prop('checked', false);
			$('label.photo').removeClass('selected');
			$('label.questions').removeClass('selected');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('An error occured while submitting this form!');
			}
		});

	});

});
