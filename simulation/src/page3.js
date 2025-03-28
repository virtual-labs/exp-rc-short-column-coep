/** 
 * author surabhi
 */

var acsUser = 0;
var agUser = 0;
var ag_corr;
var d_corr = 0;
var dUser;
var lmin_corr;
var ymin_corr;
var lminUser;
var yminUser;
var dfg = 0;
var ascCorr = 0;
var asUsr = 0;

function areaCalculate() {
	flg = 1;
	$("#centerText1").html('DIAGRAM');
	$("#centerText2").html('CALCULATIONS');

	$("#procedure").prop("hidden", true);
	//    diagCar();

	labels1 = '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Assume ASC in range 0.8 % to 6 % :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit1" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
		+ '</div>'
		+ '</div>'

		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Ag (mm<sup>2</sup>):  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt2"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit2" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'

		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate D (mm) :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit3" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate e<sub>min(x)</sub> (mm) :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt4"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit4" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate e<sub>min(y)</sub> (mm) :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt5"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit5" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Minimun Essentricity Criteria e<sub>min(x)</sub> :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt8"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit8" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">  Minimun Essentricity Criteria e<sub>min(y)</sub>  :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt9"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit9" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Cross Area :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt6"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit6" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate % Asc:  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt7"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit7" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Asc:  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt10"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit10" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+ '<div class="col-sm-12">'
		+ '<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="Next_pg4" data-toggle="modal" data-target="#myModal" hidden ><b>Next Level </b></button>'
	$("#page3Div1").html(labels1);


	var id = 1;
	var idAg = 1;
	var stelFact;
	if (steelVal == 415 || steelVal == 500) {
		stelFact = 0.67;
		console.log("stel val" + stelFact);
	}
	else {
		stelFact = 0.77;
		console.log("stel val" + stelFact);
	}

	$("#submit1").click(function() {

		acsUser = $("#txt1").val();
		if (acsUser == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (id <= 3) {
				if (acsUser >= 0.8 && acsUser <= 6) {

					$("#txt2").prop("disabled", false);
					$("#submit2").prop("disabled", false);
					$("#txt1").prop("disabled", true);
					$("#submit1").prop("disabled", true);

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + acsUser);


				} else {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is within Range");

				}


			} else if (id == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Select the range between 0.8 to 6 %");


			} else {
				acsUser = $("#txt1").val();
				//						flow = flowAns.toFixed(2);
				if (acsUser >= 0.8 && acsUser <= 6) {
					id = 1;
					$("#txt2").prop("disabled", false);
					$("#submit2").prop("disabled", false);
					$("#txt1").prop("disabled", true);
					$("#submit1").prop("disabled", true);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + acsUser);


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("suggested value is 1 %");
				}
			}
			id++;
		}

	});
	
	// factor according to steal greade 
	var stlfact = 0 
	if(steelVal == 250){
		stlfact = 0.77;
	}
	else{
		stlfact = 0.67;
	}

	function calculteAg(acsUser) {
		var stp1 = 0.4 * conVal;
		console.log("step1" + stp1);
		var stp2 = (stlfact * steelVal) - stp1  
		console.log("step2" + stp2);
		var stp3 = stp2 * (acsUser/100);
		console.log("step3" + stp3);
		var stp4 = stp1 + stp3;
		console.log("step4" + stp4);
		ag_corr = (pu_user * 1000) / stp4;
		console.log("ag corect = " + ag_corr);

	}

	$("#submit2").click(function() {
		calculteAg(acsUser);

		agUser = $("#txt2").val();
		if (agUser == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idAg <= 3) {
				if (agUser >= ag_corr.toFixed(2)) {

					$("#txt2").prop("disabled", true);
					$("#submit2").prop("disabled", true);

					$("#txt3").prop("disabled", false);
					$("#submit3").prop("disabled", false);

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ag_corr.toFixed(2));


				} else {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (idAg == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Pu = [0.4 fck + (" + stelFact + " fy - 0.4 fck)P] Ag");


			} else {
				agUser = $("#txt2").val();
				//						flow = flowAns.toFixed(2);
				if (agUser >= ag_corr.toFixed(2)) {
					idAg = 1;
					$("#txt2").prop("disabled", true);
					$("#submit2").prop("disabled", true);

					$("#txt3").prop("disabled", false);
					$("#submit3").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ag_corr.toFixed(2));


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is " + ag_corr.toFixed(2));
				}
			}
			idAg++;
		}



	});

	function calculte_D(agUser, b_user) {

		d_corr = agUser / b_user;

	}
	var idd = 1;
	var idl = 1;
	var idy = 1;

	$("#submit3").click(function() {
		calculte_D(agUser, b_user);

		dUser = $("#txt3").val();
		if (dUser == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idd <= 3) {
				if (dUser >= d_corr.toFixed(2)) {
					dfg  = 1;
				$("#page3Div2").html('');
						
						simplySupported();
					$("#txt4").prop("disabled", false);
					$("#submit4").prop("disabled", false);
					$("#txt3").prop("disabled", true);
					$("#submit3").prop("disabled", true);


//					$(".modal-header").html("Correct answer");
//					$(".modal-header").css("background", "green");
//					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//					$("#MsgModal").html("Enter value is " + d_corr.toFixed(2));


				} else {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (idd == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("D = Ag / b");


			} else {
				dUser = $("#txt3").val();
				//						flow = flowAns.toFixed(2);
				if (dUser >= d_corr.toFixed(2)) {
					idd = 1;
					dfg  = 1;
					$("#page3Div2").html('');
	
						simplySupported();
					$("#txt3").prop("disabled", true);
					$("#submit3").prop("disabled", true);
					$("#txt4").prop("disabled", false);
					$("#submit4").prop("disabled", false);
//					$(".modal-header").html("Correct answer");
//					$(".modal-header").css("background", "green");
//					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//					$("#MsgModal").html("Enter value is " + d_corr.toFixed(2));


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is equal to or more than " + d_corr.toFixed(2));
				}
			}
			idd++;
		}

	});

	function calculateLmin(dUser) {
		var lmin = ((lx * 1000) / 500) + (dUser / 30);
		lmin_corr = lmin;
		
		var lmin1 = dUser * 0.05;
		console.log("l min cretira"+lmin1);
		if (lmin > 20) {
			lmin_corr = lmin;

		}
		else {
			lmin_corr = 20;
		}
	}


	$("#submit4").click(function() {
		calculateLmin(dUser);
		lminUser = $("#txt4").val();
		if (lminUser == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idl <= 3) {
				if (lminUser == lmin_corr.toFixed(2)) {


					$("#txt4").prop("disabled", true);
					$("#submit4").prop("disabled", true);
					$("#txt5").prop("disabled", false);
					$("#submit5").prop("disabled", false);

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + lmin_corr.toFixed(2));


				} else {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (idl == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("l<sub>min</sub> = (lx / 500)+(D/30)");


			} else {
				lminUser = $("#txt4").val();
				//						flow = flowAns.toFixed(2);
				if (lminUser == lmin_corr.toFixed(2)) {
					idl = 1;


					$("#txt4").prop("disabled", true);
					$("#submit4").prop("disabled", true);
					$("#txt5").prop("disabled", false);
					$("#submit5").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + lmin_corr.toFixed(2));


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is equal to or more than " + lmin_corr.toFixed(2));
				}
			}
			idl++;

		}
	});
	
	var idy = 1;
	
		function calculateYmin(b_user) {
		var ymin = ((ly *1000) / 500) + (b_user / 30);
		ymin_corr = ymin;
		var ymin1 = b_user * 0.05;
		console.log("l min cretira"+ymin1);
		if (ymin > 20) {
			ymin_corr = lmin;

		}
		else {
			ymin_corr = 20;
		}
	}
	
	$("#submit5").click(function() {
		calculateYmin(b_user);
		yminUser = $("#txt5").val();
		if (yminUser == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idy <= 3) {
				if (yminUser == ymin_corr.toFixed(2)) {

					$("#txt5").prop("disabled", true);
					$("#submit5").prop("disabled", true);
					$("#txt8").prop("disabled", false);
					$("#submit8").prop("disabled", false);

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ymin_corr.toFixed(2));


				} else {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (idy == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Y<sub>min</sub> = (ly / 500)+(b/30)");


			} else {
				yminUser = $("#txt5").val();
				//						flow = flowAns.toFixed(2);
				if (yminUser == ymin_corr.toFixed(2)) {
					idy = 1;


					$("#txt5").prop("disabled", true);
					$("#submit5").prop("disabled", true);
					$("#txt8").prop("disabled", false);
					$("#submit8").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ymin_corr.toFixed(2));


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is equal to or more than " + ymin_corr.toFixed(2));
				}
			}
			idy++;

		}
	});
	
	var area_corr ;
	var	ida = 1;
	var areaUser ; 
	function calculateArea(b_user,dUser){
		area_corr = b_user * dUser;
	}
	
	$("#submit6").click(function() {
		calculateArea(b_user,dUser)
		areaUser = $("#txt6").val();
		if (areaUser == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (ida <= 3) {
				if (areaUser == area_corr.toFixed(2)) {

					$("#txt6").prop("disabled", true);
					$("#submit6").prop("disabled", true);
					$("#txt7").prop("disabled", false);
					$("#submit7").prop("disabled", false);

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + areaUser.toFixed(2));


				} else {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (ida == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Gross Area = b X D");


			} else {
				areaUser = $("#txt6").val();
				//						flow = flowAns.toFixed(2);
				if (areaUser == area_corr.toFixed(2)) {
					ida = 1;


					$("#txt6").prop("disabled", true);
					$("#submit6").prop("disabled", true);
					$("#txt7").prop("disabled", false);
					$("#submit7").prop("disabled", false);
//					$(".modal-header").html("Correct answer");
//					$(".modal-header").css("background", "green");
//					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//					$("#MsgModal").html("Enter value is " + areaUser.toFixed(2));


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is " + area_corr.toFixed(2));
				}
			}
			ida++;

		}
	});
		var p_corr;
		var pUser;
		var idp = 1;
		function calculteFag(acsUser,ag_corr) {
		var stp1 = 0.4 * conVal;
		console.log("step1" + stp1);
		var stp2 = (stlfact * steelVal) - stp1
		console.log("step2" + stp2);
		
		p_corr = (pu_user - stp1) / (ag_corr * stp2) ;
		console.log("p corect = " + p_corr);

	}
	
		$("#submit7").click(function() {
		calculteFag(acsUser,ag_corr);
		pUser = $("#txt7").val();
		if (pUser == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idp <= 3) {
				if (pUser == p_corr.toFixed(2)) {

					$("#txt6").prop("disabled", true);
					$("#submit6").prop("disabled", true);
					$("#txt10").prop("disabled", false);
					$("#submit10").prop("disabled", false);

//					$(".modal-header").html("Correct answer");
//					$(".modal-header").css("background", "green");
//					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//					$("#MsgModal").html("Enter value is " + pUser.toFixed(2));


				} else {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (idp == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Pu = [0.4 fck + (" + stelFact + " fy - 0.4 fck)P] Ag");


			} else {
				pUser = $("#txt7").val();
				//						flow = flowAns.toFixed(2);
				if (pUser == p_corr.toFixed(2)) {
					idp = 1;


					$("#txt6").prop("disabled", true);
					$("#submit6").prop("disabled", true);
					$("#txt10").prop("disabled", false);
					$("#submit10").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + pUser);


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is " + p_corr.toFixed(2));
				}
			}
			idp++;

		}
	});
	var idex = 1;
	var ex_corr ;
	var ex_user;
	var idey = 1;
	var ey_corr ;
	var ey_user;
	function calculate_emin(dUser,b_user){
		
		ex_corr = dUser*0.05;
		ey_corr = b_user*0.05;
	}
	
		$("#submit8").click(function() {
		calculate_emin(dUser,b_user)
		ex_user = $("#txt8").val();
		if (ex_user == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idex <= 3) {
				if (ex_user == ex_corr.toFixed(2)) {

					$("#txt8").prop("disabled", true);
					$("#submit8").prop("disabled", true);
					$("#txt9").prop("disabled", false);
					$("#submit9").prop("disabled", false);

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ex_corr.toFixed(2));


				} else if (ex_user != ex_corr.toFixed(2)) {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (idex == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("e<sub>min(x)</sub> < 0.05 X D");


			} else {
				ex_user = $("#txt8").val();
				//						flow = flowAns.toFixed(2);
				if (ex_user == ex_corr.toFixed(2)) {
					idex = 1;


					$("#txt8").prop("disabled", true);
					$("#submit8").prop("disabled", true);
					$("#txt9").prop("disabled", false);
					$("#submit9").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ex_corr.toFixed(2));


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is equal to " + ex_corr.toFixed(2));
				}
			}
			idex++;

		}
	});
	
	$("#submit9").click(function() {
		calculate_emin(dUser,b_user)
		ey_user = $("#txt9").val();
		if (ey_user == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idey <= 3) {
				if (ey_user == ey_corr) {

					$("#txt9").prop("disabled", true);
					$("#submit9").prop("disabled", true);
					$("#txt6").prop("disabled", false);
					$("#submit6").prop("disabled", false);

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ey_corr);


				} else if (ey_user != ey_corr) {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (idey == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("e<sub>min(y)</sub> < 0.05 X b");


			} else {
				ey_user = $("#txt9").val();
				//						flow = flowAns.toFixed(2);
				if (ey_user == ey_corr) {
					idey = 1;


					$("#txt9").prop("disabled", true);
					$("#submit9").prop("disabled", true);
					$("#txt6").prop("disabled", false);
					$("#submit6").prop("disabled", false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ey_corr);


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is equal to " + ey_corr);
				}
			}
			idey++;

		}
	});
	var ids = 1;
	function calculateASC(dUser,b_user,p_corr){
		var  ascCorr1 = p_corr *dUser*b_user;
 			ascCorr = ascCorr1.toFixed(2);
	}
	
	$("#submit10").click(function() {
		calculateASC(dUser,b_user,p_corr)
		 asUsr = $("#txt10").val();
		if (asUsr == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (ids <= 3) {
				if (asUsr == ascCorr) {

					$("#txt10").prop("disabled", true);
					$("#submit10").prop("disabled", true);
					$("#Next_pg4").prop("hidden", false);
					

					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + ascCorr);


				} else if (asUsr != ascCorr) {
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is incorrect");

				}


			} else if (ids == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("ASC = P X b X D");


			} else {
				
				//						flow = flowAns.toFixed(2);
				if (asUsr == ascCorr) {
					ids = 1;


					$("#txt10").prop("disabled", true);
					$("#submit10").prop("disabled", true);
					$("#Next_pg4").prop("hidden", false);
					


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is equal to " + ascCorr);
				}
			}
			ids++;

		}
	});
	
	 $("#Next_pg4").click(function(){
	flg=1
	$("#canvas-div").html('');
	page4();
	$("#main-div-conf").html('');
	
	simplySupported();
//	var htm = '<img src="images/column_types.png" class="img-fluid" >'
//      $("#main-div-conf").html(htm);
	$("#centerText1").html('');
$("#centerText2").html('');
//	                                                                                                                                                                                                                                                                                                                                                                          "#main-div-conf").html(funOver);
//	areaCalculate();
	
	});
}