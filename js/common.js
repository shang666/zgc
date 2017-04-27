$(document).ready(function(){
	$('#img').click(function(){
		$('#nav_ul').slideToggle("show")
	});

	$('#more2').click(function(){
		$('.works_n').slideDown("show")
	});
	$('#hidden2').click(function(){
		$('.works_n').slideUp("show")
	});	
	
	
	
	
	$('#more3').click(function(){
		$('.star_n').slideDown("show")
	});
	$('#hidden3').click(function(){
		$('.star_n').slideUp("show")
	});
	
	
	$('#more4').click(function(){
		$('.unit_n').slideDown("show")
	});
	$('#hidden4').click(function(){
		$('.unit_n').slideUp("show")
	});
	
});


$(document).ready(function(){
	$("#cli").click(function(){
		$('.kc').slideToggle("slow");	
		if (cli.innerHTML=="收起") {
			cli.innerHTML="查看更多";
		} else{
			cli.innerHTML="收起";
		}
	
	})
})



	