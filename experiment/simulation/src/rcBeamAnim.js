var x = 100, y = 100;
var z = x + 350;
var t1;

function simplySupported() {
//	$("#canvas-div").html('');
//	$("#centerText2").html('DIAGRAM');
	if (flg == 1) {
		paper = new Raphael(document.getElementById('page3Div2'));
	} else {
		paper = new Raphael(document.getElementById('page4Div2'));
	}


	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		if (flg == 1) {
			paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
		}

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		if (flg == 1) {
			paper = new Raphael(document.getElementById('page3Div2'), '100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
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

		var text_rect = paper.text(x + 340, y + 170, "b").attr({
			'font-size': 18,
			'font-weight': "bold"
		});

	

		var text_rect = paper.text(x + 400, y + 100, "D").attr({
			'font-size': 18,
			'font-weight': "bold"
		});
		
	
		if (dfg == 1){
				var text_P = paper.text(x + 340, y + 200, bCal ).attr({
		'font-size': 18,
		'font-weight': "bold",
		'stroke': '#5d6de8'
	});
	
		var text_rect = paper.text(x + 430, y + 100, dCal ).attr({
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
	
		var text_P = paper.text(x + 610, y + 60, pu_user).attr({
		'font-size': 18,
		'font-weight': "bold",
		'stroke': '#5d6de8'
	});
}
}


function ReactAnim(){
	
	var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
		
			paper = new Raphael(document.getElementById('page5Div2'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
		paper = new Raphael(document.getElementById('page5Div2'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
	
	
	 // Outer rectangle
//    var rect = paper.rect(50, 50, 200, 100);
//    rect.attr({ stroke: "black", "stroke-width": 2 });

  var react =  paper.rect((x+70),(y+10),200 ,300,30).attr({stroke: "black", "stroke-width": 2});
  var react =  paper.rect((x+80),(y+17),180 ,280,30).attr({stroke: "black", "stroke-width": 2});
  	paper.circle(x + 100, y + 32, 12).attr({ 'stroke': '#6f8696', 'stroke-width': '1', 'fill': 'black' });
  	paper.circle(x + 240, y + 32, 12).attr({ 'stroke': '#6f8696', 'stroke-width': '1', 'fill': 'black' });
  	paper.circle(x + 240, y + 280, 12).attr({ 'stroke': '#6f8696', 'stroke-width': '1', 'fill': 'black' });
  	paper.circle(x + 100, y + 280, 12).attr({ 'stroke': '#6f8696', 'stroke-width': '1', 'fill': 'black' });

//    // Slanted lines in the corner
//    paper.path("M55 55L65 65").attr({ stroke: "black", "stroke-width": 2 });
//    paper.path("M60 55L70 65").attr({ stroke: "black", "stroke-width": 2 });
//
//    // Dimension lines
//    paper.path("M40 50L40 150").attr({ stroke: "black", "stroke-width": 1, "arrow-end": "classic-wide-long" });
//    paper.path("M50 160L250 160").attr({ stroke: "black", "stroke-width": 1, "arrow-end": "classic-wide-long" });
//
//    // Text labels for dimensions
//    paper.text(150, 170, "D = 200").attr({ "font-size": 12, "font-weight": "bold" });
//    paper.text(30, 100, "d").attr({ "font-size": 12, "font-weight": "bold" });
};
	












