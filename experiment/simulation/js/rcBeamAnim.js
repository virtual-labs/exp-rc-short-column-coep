var x = 100, y = 100;
var z = x + 350;
var t1;

function simplySupported() {
//	$("#canvas-div").html('');
//	$("#centerText2").html('DIAGRAM');
	if (flg == 1) {
		paper = new Raphael(document.getElementById('page3Div2'));
	} else {
		paper = new Raphael(document.getElementById('page4Div1'));
	}


	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		if (flg == 1) {
			paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('page4Div1'), '100%', '100%');
		}

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		if (flg == 1) {
			paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('page4Div1'), '100%', '100%');
		}
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

	reactange(x, y + 50);
	function reactange(x, y) {
		react = paper.path('M' + (x + 300) + ' ' + (y + 50) + 'l 80 0 l 0 100 l -80 0 l 0 -100 M' + (x + 360) + ' ' + (y + 170) + 'l 30 0 l -10 -10 l 10 10 l -10 10   M' + (x + 330) + ' ' + (y + 170) + 'l -30 0 l 10 10 l -10 -10 l 10 -10 M'
			+ (x + 400) + ' ' + (y + 120) + 'l 0 30 l 10 -10 l -10 10 l -10 -10 M'
			+ (x + 400) + ' ' + (y + 80) + 'l 0 -30 l 10 10 l -10 -10 l -10 10 M')
			.attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': '' }).toFront();

		var text_rect = paper.text(x + 340, y + 170, "D").attr({
			'font-size': 18,
			'font-weight': "bold"
		});

	

		var text_rect = paper.text(x + 400, y + 100, "b").attr({
			'font-size': 18,
			'font-weight': "bold"
		});
		
		var text_rect = paper.text(x + 430, y + 100,b_user ).attr({
			'font-size': 18,
			'font-weight': "bold",
			'stroke': '#5d6de8'
		});
		if (dfg == 1){
				var text_P = paper.text(x + 340, y + 200,dUser ).attr({
		'font-size': 18,
		'font-weight': "bold",
		'stroke': '#5d6de8'
	});
		}

	}
	
	column (x-400 ,y);
	function column (x,y){ 
	column = paper.path('M' + (x + 500) + ' ' + (y + 300) + 'l 0 -200 l  100 0	l 0 200 M'
		+ (x + 500) + ' ' + (y + 300) + 'l 30 0 l 10 -10 l 10 35 l 10 -28  l 44 0 M'
		+ (x + 550) + ' ' + (y + 60) + 'l 0 30 l 10 -10 l -10 10 l -10 -10 M')
		.attr({ 'stroke': 'black', 'stroke-width': '3', 'fill': '' }).toFront();

	var text_P = paper.text(x + 570, y + 60, "P = ").attr({
		'font-size': 18,
		'font-weight': "bold"
	});
	
		var text_P = paper.text(x + 600, y + 60, pu_user).attr({
		'font-size': 18,
		'font-weight': "bold",
		'stroke': '#5d6de8'
	});
}
}














