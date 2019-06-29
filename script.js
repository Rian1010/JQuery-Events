$(document).ready(function() {

/*	$(".stream-nav").on("click", function() {
		var allStreamsCardsSelector = ".card";
		var thisStreamCardsSelector = "." + this.id + ".card";

		$(allStreamsCardsSelector).removeClass("card-highlight");
		$(thisStreamCardsSelector).addClass("card-highlight");
	});





	$('p').click(function() {
		$(this).addClass("highlight_text");
	});
	$('h2').hover(function() {
		$(this).css("background-color", "lightBlue");
	});
	
	
	
	
	
	$('#h2_html').hover(function() {
		$('#h2_html').removeClass('h2_font_size');
		$('#h2_sql').removeClass('h2_font_size');
		$('#h2_python').removeClass('h2_font_size');
		$('#h2_jquery').removeClass('h2_font_size');
		$('#h2_django').removeClass('h2_font_size');
		$('#h2_css').removeClass('h2_font_size');
		$('#h2_html').addClass('h2_font_size');
	});
	$('#h2_sql').hover(function() {
		$('#h2_html').removeClass('h2_font_size');
		$('#h2_sql').removeClass('h2_font_size');
		$('#h2_python').removeClass('h2_font_size');
		$('#h2_jquery').removeClass('h2_font_size');
		$('#h2_django').removeClass('h2_font_size');
		$('#h2_css').removeClass('h2_font_size');
		$('#h2_sql').addClass('h2_font_size');
	});
	$('#h2_python').hover(function() {
		$('#h2_html').removeClass('h2_font_size');
		$('#h2_sql').removeClass('h2_font_size');
		$('#h2_python').removeClass('h2_font_size');
		$('#h2_jquery').removeClass('h2_font_size');
		$('#h2_django').removeClass('h2_font_size');
		$('#h2_css').removeClass('h2_font_size');
		$('#h2_python').addClass('h2_font_size');
	});
	$('#h2_jquery').hover(function() {
		$('#h2_html').removeClass('h2_font_size');
		$('#h2_sql').removeClass('h2_font_size');
		$('#h2_python').removeClass('h2_font_size');
		$('#h2_jquery').removeClass('h2_font_size');
		$('#h2_django').removeClass('h2_font_size');
		$('#h2_css').removeClass('h2_font_size');
		$('#h2_jquery').addClass('h2_font_size');
	});
	$('#h2_django').hover(function() {
		$('#h2_html').removeClass('h2_font_size');
		$('#h2_sql').removeClass('h2_font_size');
		$('#h2_python').removeClass('h2_font_size');
		$('#h2_jquery').removeClass('h2_font_size');
		$('#h2_django').removeClass('h2_font_size');
		$('#h2_css').removeClass('h2_font_size');
		$('#h2_django').addClass('h2_font_size');
	});
	$('#h2_css').hover(function() {
		$('#h2_html').removeClass('h2_font_size');
		$('#h2_sql').removeClass('h2_font_size');
		$('#h2_python').removeClass('h2_font_size');
		$('#h2_jquery').removeClass('h2_font_size');
		$('#h2_django').removeClass('h2_font_size');
		$('#h2_css').removeClass('h2_font_size');
		$('#h2_css').addClass('h2_font_size');
	});
	
	
	
	
	
	$(".bottom_button").mouseenter(function() {
		$("body").css("background-color", "#000")
	});
	$(".bottom_button").mouseleave(function() {
		$("body").css("background-color", "#eee")
	});
	
	
	
	
	
	$('#button_effects1').click(function() {
		$('#par1').slideToggle('1000')
	});
	$('#button_effects2').click(function() {
		$('#par2').slideToggle('1000')
	});
	$('#button_effects3').click(function() {
		$('#par3').slideToggle('1000')
	});
	$('#button_effects4').click(function() {
		$('#par4').toggle('1000')
	});
	$('#button_effects5').click(function() {
		$('#par5').toggle('1000')
	});
	$('#button_effects6').click(function() {
		$('#par6').toggle(1000)
	});
	
	
	
	
	
	$('#button_effects1').mouseenter(function() {
		$('#button_effects1').fadeTo('fast', 0.5);
	});
	$('#button_effects1').mouseleave(function() {
		$('#button_effects1').fadeTo('fast', 1);
	});
	$('#button_effects2').mouseenter(function() {
		$('#button_effects2').fadeTo(1000, 0.5);
	});
	$('#button_effects2').mouseleave(function() {
		$('#button_effects2').fadeTo(1000, 1);
	});
	$('#button_effects3').mouseenter(function() {
		$('#button_effects3').fadeTo(1000, 0.5);
	});
	$('#button_effects3').mouseleave(function() {
		$('#button_effects3').fadeTo(1000, 1);
	});
	$('#button_effects4').mouseenter(function() {
		$('#button_effects4').fadeTo(1000, 0.5);
	});
	$('#button_effects4').mouseleave(function() {
		$('#button_effects4').fadeTo(1000, 1);
	});
	$('#button_effects5').mouseenter(function() {
		$('#button_effects5').fadeTo(1000, 0.5);
	});
	$('#button_effects5').mouseleave(function() {
		$('#button_effects5').fadeTo(1000, 1);
	});
	$('#button_effects6').mouseenter(function() {
		$('#button_effects6').fadeTo(1000, 0.5);
	});
	$('#button_effects6').mouseleave(function() {
		$('#button_effects6').fadeTo(1000, 1);
	});
	
	
	
	
	
	$('button').mouseenter(function() {
	    $(this).removeClass('makeRed').addClass('makeBorder');
	});
	$('button').mouseleave(function() {
	    $('button').removeClass('makeBorder').addClass('makeRed');
	});*/
	
	
	
	
	
	$("p").click(function() {
	    $(this).children("a").css("background-color", "yellow");
	});
	

	$("button").click(function() {
	   $(this).prev().slideToggle('slow');
	});
	
	
	$(".card").click(function() {
	    $(this).toggleClass("highlight");
	})
	
	
	
	
	
	$('.select').click(function() {
	    $(".card:not(.highlight)").hide();
	})
	
	$(".all").click(function() {
	    $(".card").show()
	})
	
	
	
	
	
	/*$("button").click(function() {
		$("p").hide(2000).show(2000);
	});

	$("button").click(function(){
		$("p").fadeIn().fadeOut();
	});*/
	/*$("button:first").click(function(){
		$("button:first").hide('slow');
		$("button:first").hide('medium');
		$("button:first").hide('fast');
		$("button:first").hide('1000');
	});*/
});
