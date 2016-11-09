/*setInterval(function(){
	var myDate = new Date();
	updateTime(date);
}, 1000);


function updateTime(date){
	var timeDiv = document.getElementById("time");
	var time = "This is the digital clock " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getseconds();
	timeDiv.innerHTML = time;
}

*/

function showTime (){
	var now = new Date();
	var meridiem = "AM";
		var h = now.getHours();
		var m = now.getMinutes();
		var s = now.getSeconds();
		
var totalTime = h + ":" + m ":" + s + "" + meridiem;
return totalTime;
	
}
document.write(totalTime);
alert(totalTime);