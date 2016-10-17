setInterval(function(){
	var date = new Date()
	var seconds = date.getSeconds()
	var minutes = date.getMinutes()
	var hour = date.getHours()
	
	
	if(hour <= 9) {
		hour = '0' + hour
	}

	if(minutes <= 9) {
		minutes = '0'+minutes;
	}

	if(seconds <= 9) {	 
		seconds = '0'+ seconds;
	}

	var time = hour + ":" + minutes + ":" + seconds
	$("#clock").html(time)
},1000)

