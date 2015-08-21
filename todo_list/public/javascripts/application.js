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
			var task = new SingleTask(sData);
			$('#list').append(task.display());
			
		}).fail(function(sData){
			console.log(sData);
			console.log('nay girly girl');
		})
	})
})

var SingleTask = function(taskObject) {
	this.body = taskObject.body;
}

git SingleTask.prototype.display = function() {
	var task = $("<div>").append( '<input type="checkbox">'+this.body+' <a href="/tasks"> delete </a> <br>' )
	return task;
};
