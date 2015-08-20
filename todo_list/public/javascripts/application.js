$(document).on('ready', function(){

	$('#new-task-form').on('submit', function(e){
		e.preventDefault();
			
			var urlVal = $(this).attr('action')
			var typeVal = $(this).attr('method')
			var dataVal = $(this).serialize()
			var textField = $('#task-input')

		$.ajax({
			url: urlVal,
			type: typeVal,
			data: dataVal,
			dataType: 'JSON'
		}).done(function(sData){
			textField.val("");
			$('#list').append(sData.body);
			
		}).fail(function(sData){
			console.log(sData);
			console.log('nay girly girl');
		})
	})

})