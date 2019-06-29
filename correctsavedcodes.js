$(document).ready(function() {


	$("#stream1_btn").on("click", function() {
		/*$(".stream1").hide();
		$(".stream1").hide("slow");
		$(".stream1").show("medium");
		$(".stream1").show('fast');
		$(".stream1").show(1000);*/
		/*$(".stream1").toggle();
		$(".stream1").toggle(1000);*/
		/*$(".stream1").slideUp();
		$(".stream1").slideUp(1000); slideDown too*/
		/*$(".stream1").slideToggle();
		$(".stream1").slideToggle(1000);*/
		/*$(".stream1").fadeOut();
		$(".stream1").fadeOut(1000);*/
		/*$(".stream1").fadeToggle();
		$(".stream1").fadeToggle(1000);*/
		$(".stream1").fadeTo(1000, 0.5);
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});

	/*$("#myButton").removeClass("blueBox").addClass("border");
	$("p").css("color", "blue").slideUp(2000).slideDown(2000);
	$("a").attr("href","http://www.example.com");*/

});






$(document).ready(function() {
	$(".bottom_button1").mouseenter(function() {
		$(".card_para:first").fadeTo(500, 0.5);
	})
	$(".bottom_button1").mouseleave(function() {
		$(".card_para:first").fadeTo(500, 1);
	})



	$("p").click(function() {
		$("p").addClass("highlight_text")
	})
	$("h2").hover(function() {
		$("h2").addClass("h2_bgcolor")
	});
	$("#h2_html").hover(function() {
		$("#h2_html").addClass("h2_font_size");
		$("#h2_sql").removeClass("h2_font_size");
		$("#h2_python").removeClass("h2_font_size");
		$("#h2_jquery").removeClass("h2_font_size");
		$("#h2_django").removeClass("h2_font_size");
		$("#h2_css").removeClass("h2_font_size");
	});
	$("#h2_sql").hover(function() {
		$("#h2_html").removeClass("h2_font_size");
		$("#h2_sql").addClass("h2_font_size");
		$("#h2_python").removeClass("h2_font_size");
		$("#h2_jquery").removeClass("h2_font_size");
		$("#h2_django").removeClass("h2_font_size");
		$("#h2_css").removeClass("h2_font_size");
	});
	$("#h2_python").hover(function() {
		$("#h2_html").removeClass("h2_font_size");
		$("#h2_sql").removeClass("h2_font_size");
		$("#h2_python").addClass("h2_font_size");
		$("#h2_jquery").removeClass("h2_font_size");
		$("#h2_django").removeClass("h2_font_size");
		$("#h2_css").removeClass("h2_font_size");
	});
	$("#h2_jquery").hover(function() {
		$("#h2_html").removeClass("h2_font_size");
		$("#h2_sql").removeClass("h2_font_size");
		$("#h2_python").removeClass("h2_font_size");
		$("#h2_jquery").addClass("h2_font_size");
		$("#h2_django").removeClass("h2_font_size");
		$("#h2_css").removeClass("h2_font_size");
	});
	$("#h2_django").hover(function() {
		$("#h2_html").removeClass("h2_font_size");
		$("#h2_sql").removeClass("h2_font_size");
		$("#h2_python").removeClass("h2_font_size");
		$("#h2_jquery").removeClass("h2_font_size");
		$("#h2_django").addClass("h2_font_size");
		$("#h2_css").removeClass("h2_font_size");
	});
	$("#h2_css").hover(function() {
		$("#h2_html").removeClass("h2_font_size");
		$("#h2_sql").removeClass("h2_font_size");
		$("#h2_python").removeClass("h2_font_size");
		$("#h2_jquery").removeClass("h2_font_size");
		$("#h2_django").removeClass("h2_font_size");
		$("#h2_css").addClass("h2_font_size");
	});
	$(".bottom_button").mouseenter(function() {
		$("body").css("background-color", "#000")
	});
	$(".bottom_button").mouseleave(function() {
		$("body").css("background-color", "#eee")
	});




	//New Challenge
	$("button").mouseenter(function() {
		$("button").removeClass("makeRed").addClass("makeBorder");
	})
	$("button").mouseleave(function() {
		$("button").addClass("makeRed").removeClass("makeBorder");

	})
	/*$("button").click(function() {
		$("p").slideToggle(500);
	})
	
	$("button").click(function() {
	    $("p").hide(2000).show(2000);
	})*/

	$("button").click(function() {
		$("p").fadeIn(500).fadeOut(500)
	})

});

