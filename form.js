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
				$('.button_field').hide();
				$('.loading').addClass('loader');
			},
			complete: function() {
			$('.button_field').show();
			$('.loading').removeClass('loader');
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
			$('#turnip_form #fancy-inputs input[type="text"]').removeClass('white');
			$('#turnip_form #fancy-inputs input[type="password"]').removeClass('white');
			$('#turnip_form #fancy-inputs input[type="number"]').removeClass('white');
			$('#turnip_form #fancy-inputs input[type="number"]').removeClass('white');
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

	// Get the form.
	var form2 = $('#turnip_form_purchase');

	// Get the messages div.
	var formMessages2 = $('#form-messages-purchase');

	// Set up an event listener for the contact form.
	$(form2).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData2 = $(form2).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form2).attr('action'),
			data: formData2,
			beforeSend: function() {
				$('.button_field').hide();
				$('.loading').addClass('loader');
			},
			complete: function() {
			$('.button_field').show();
			$('.loading').removeClass('loader');
			}
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages2).removeClass('error');
			$(formMessages2).addClass('success');

			// Set the message text.
			$(formMessages2).text(response);

			// Clear the form.
			$('#user_purchase').val('');
			$('#password_purchase').val('');
			$('#price_purchase').val('');
			$('#date_purchase').val('');
			$('#turnip_form_purchase #fancy-inputs input[type="text"]').removeClass('white');
			$('#turnip_form_purchase #fancy-inputs input[type="password"]').removeClass('white');
			$('#turnip_form_purchase #fancy-inputs input[type="number"]').removeClass('white');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages2).removeClass('success');
			$(formMessages2).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages2).text(data.responseText);
			} else {
				$(formMessages2).text('An error occured while submitting this form!');
			}
		});

	});

});
