$(document).ready(function(){
    $(".playbtn").click(function(ev){
        $("#imagevideo").toggleClass("in");
          $("#imagevideo-innerwrap iframe#video")[0].src = "https://www.youtube.com/embed/AhbMIS9zjGg?rel=0&autoplay=1";
	});	
	$("#imagevideo-close").click(function(ev){
		 $("#imagevideo-innerwrap iframe")[0].src="https://www.youtube.com/embed/AhbMIS9zjGg?rel=0";
		$("#imagevideo").removeClass("in");
	});
});




