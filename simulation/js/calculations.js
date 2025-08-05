var pu_user ;
var lx_user ;
var ly_user ;
var b_user;

function loadCalculate() {


	$("#centerText1").html('DIAGRAM');
	$("#centerText2").html('CALCULATIONS');

	$("#procedure").prop("hidden", true);
	//    diagCar();

	labels1 = '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Pu for  load ' + pre + ' (kN):  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit_load1" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
		+ '</div>'
		+ '</div>'

		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Effective length lx<sub>eff</sub>(mm):  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="text2"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit_load2" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'

		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Effective length ly <sub>eff</sub>(mm):  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="text3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit_load3" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate b (mm):  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="text4"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit_load4" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		 +'<div class="col-sm-12">'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="Next" data-toggle="modal" data-target="#myModal" hidden ><b>Next Level </b></button>'
	$("#page2Div2").html(labels1);


	id = 1;
	id1 = 1;
	id2 = 1;
	id3 = 1;
	$("#submit_load1").click(function() {
		 pu_user = $("#text1").val();
		console.log("presuure" + pu_user);
		pu_corr = pre * 1.5;
		console.log("presuur coree" + pu_corr);


		if (pu_user == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Error");


		}
		else {
			if (id <= 3) {
				if (pu_user >= pu_corr) {
					$("#text2").prop("disabled", false);
					$("#submit_load2").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");

				} else if (pu_user != pu_corr) {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Error");

				}


			} else if (id == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "blue");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Formula : Pu  = 1.5 X P");


			} else {
				pu_user = $("#text1").val();
				//						flow = flowAns.toFixed(2);
				if (pu_user >= pu_corr) {
					id = 1;
					$("#text2").prop("disabled", false);
					$("#submit_load2").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is " + pu_corr);
				}
			}
			id++;
		}


	});
	var lx_ecorr = 0;
	var ly_ecorr = 0;
	var supp_fact = 0;
	console.log("supprt" + support);
	if (support == 1) {
		supp_fact = 0.65;
		lx_ecorr = supp_fact * lx;
		ly_ecorr = supp_fact * ly;
		
		console.log("lx " + lx_ecorr)
	}
	else if (support == 2) {
		supp_fact = 0.8;
		lx_ecorr = supp_fact * lx;
		ly_ecorr = supp_fact * ly;
	}
	else if (support == 3) {
		supp_fact = 1;
		lx_ecorr = lx;
		ly_ecorr = ly;
	}
	else if (support == 2) {
		supp_fact = 2;
		lx_ecorr = supp_fact * lx;
		ly_ecorr = supp_fact * ly;
	}

	$("#submit_load2").click(function() {
		lx_user = $("#text2").val();
		$("#text1").prop("disabled", true);
		$("#submit_load1").prop("disabled", true);

		if (lx_user == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Error");


		}
		else {
			if (id1 <= 3) {
				if (lx_user == lx_ecorr.toFixed(2)) {
					$("#text3").prop("disabled", false);
					$("#submit_load3").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");

				} else if (lx_user != lx_ecorr.toFixed(2)) {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Error");

				}


			} else if (id1 == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "blue");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Formula : lx<sub>eff</sub>  = "+supp_fact+" X lx");


			} else {
				lx_user = $("#text2").val();
				//						flow = flowAns.toFixed(2);
				if (lx_user == lx_ecorr.toFixed(2)) {
					id1 = 1;
					$("#text3").prop("disabled", false);
					$("#submit_load3").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("answer");
					$(".modal-header").css("background", "blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is " + lx_ecorr);
				}
			}
			id1++;
		}

	});


	// effective ly click

	$("#submit_load3").click(function() {
		 ly_user = $("#text3").val();
		$("#text1").prop("disabled", true);
		$("#submit_load1").prop("disabled", true);
		$("#text2").prop("disabled", true);
		$("#submit_load2").prop("disabled", true);

		if (ly_user == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Error");


		}
		else {
			if (id2 <= 3) {
				if (ly_user == ly_ecorr.toFixed(2)) {
					$("#text4").prop("disabled", false);
					$("#submit_load4").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");

				} else if (ly_user != ly_ecorr.toFixed(2)) {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Error");

				}


			} else if (id2 == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "blue");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Formula : ly<sub>eff</sub>  = "+supp_fact+" X ly");


			} else {
				ly_user = $("#text3").val();
				//						flow = flowAns.toFixed(2);
				if (ly_user == ly_ecorr.toFixed(2)) {
					id2 = 1;
					$("#text4").prop("disabled", false);
					$("#submit_load4").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("answer");
					$(".modal-header").css("background", "blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is " + ly_ecorr);
				}
			}
			id2++;
		}

	});
	
	
	//calculte b
	var eff_length;
	var b_corr;
	
	id3 = 1;
	$("#submit_load4").click(function() {
		
	if (ly_ecorr > lx_ecorr){
		eff_length = ly_ecorr;
	}
	else {
		eff_length = lx_ecorr;
	}
	
		b_corr = (eff_length *1000)/12;
		console.log("bcor"+b_corr);
	
		 b_user = $("#text4").val();
		$("#text1").prop("disabled", true);
		$("#submit_load1").prop("disabled", true);
		$("#text2").prop("disabled", true);
		$("#submit_load2").prop("disabled", true);
		$("#text3").prop("disabled", true);
		$("#submit_load3").prop("disabled", true);

		if (b_user == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Error");


		}
		else {
			if (id3 <= 3) {
				if (b_user >= b_corr.toFixed(2)) {
					$("#text3").prop("disabled", false);
					$("#submit_load3").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//					$("#Next").prop("hidden", false);

				} else  {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Error");

				}


			} else if (id3 == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "blue");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Formula : b  > L<sub>eff</sub> /12");


			} else {
				b_user = $("#text4").val();
				//						flow = flowAns.toFixed(2);
				if (b_user >= b_corr.toFixed(2)) {
					id3 = 1;
					$("#text3").prop("disabled", false);
					$("#submit_load3").prop("disabled", false);
					
//					$("#Next").prop("hidden", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("answer");
					$(".modal-header").css("background", "blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct value for b " + b_corr);
				}
			}
			id3++;
		}

	});
	
	  $("#Next").click(function(){
	flg=1
	$("#canvas-div").html('');
	$("#main-div-conf").html('');
	
	simplySupported();
//	var htm = '<img src="images/column_types.png" class="img-fluid" >'
//      $("#main-div-conf").html(htm);
	$("#centerText1").html('');
$("#centerText2").html('');
//	                                                                                                                                                                                                                                                                                                                                                                          "#main-div-conf").html(funOver);
	areaCalculate();
	
	});
	
	
}