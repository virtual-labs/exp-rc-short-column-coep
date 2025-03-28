var phiVal;
var bar = 0;
var barusr = 0;

function page4(){
	
	
 labels4 =  '<div class="col-sm-12" id = dropdown >'
 +  '<div class="row">'
	 +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Select &phi; value : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="phival" " style="height:auto; " >'
	   +'<option value="0">--- Select value --- </option>'
	   +'<option value="8" >8  </option>'
	   +'<option value="10" >10  </option>'
	   +'<option value="12" >12  </option>'
	   +'<option value="16" >16  </option>'
	   +'<option value="20" >20  </option>'
	   +'<option value="25" >25  </option>'
	   +'<option value="32" >32  </option>'
	   +'<option value="40" >40  </option>'
	   +'</select>'
	   +'</div>'
	   + '</div>'
	    + '</div>'
	   +'<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Number of bars :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" disabled/>'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit1" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+'<div class="col-sm-12" id="forceEntered">'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Provide No. of bars :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt2"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" disabled/>'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit2" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" disabled>Submit</input>'
		+ '</div>'
		+ '</div>'
		+'<div class="col-sm-12" id="forceEntered">'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">ASC Provided :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit3" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;"disabled >Submit</input>'
		+ '</div>'
		+ '</div>'
		+'<div class="col-sm-12" id="forceEntered">'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Minimum Reinforcement check r<sub>f</sub>:  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt4"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit4" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;"disabled >Submit</input>'
		+ '</div>'
		+ '</div>'
		+'<div class="col-sm-12" id="forceEntered">'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Maximum Reinforcement check r<sub>f</sub> :  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="txt5"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control"disabled />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="submit5" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;"disabled >Submit</input>'
		+ '</div>'
		+ '</div>'
	  $("#page4Div2").html(labels4); 
	  
	  $("#phival").change(function(){
		  
		  phiVal = $("#phival").val();
		  console.log("phi value"+phiVal);
		  if (phiVal == 0 ){
			  
		  }
		  else {
			  $("#txt1").prop("disabled",false);	
			  $("#submit1").prop("disabled",false);
			  $("#forceEntered").prop("hidden",false);
			  	
		  }
	  });
	  
	
	  function barsCalculation(phiVal,  ascCorr){
		 bar1 = (Math.PI/4)*Math.pow(phiVal, 2); ;
		 bar =  ascCorr /bar1;
		 console.log(bar);
	  }
	  var barUsr ;
	  var id = 1;
	  $("#submit1").click(function() {
		barsCalculation(phiVal,  ascCorr);
		barUsr = $("#txt1").val();
		if (barUsr == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (id <= 3) {
				if (barUsr == bar) {

					$("#txt2").prop("disabled", false);
					$("#submit2").prop("disabled", false);
					$("#txt1").prop("disabled", true);
					$("#submit1").prop("disabled", true);
					 $("#forceEntered").prop("hidden",false);	
				
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + barUsr);


				} else if (barUsr != bar){
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
					//					
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect value");

				}


			} else if (id == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("ASC/&Pi; /4 X &phi;<sup>2<sup>  ");


			} else {
				
				//						flow = flowAns.toFixed(2);
				if (barUsr == bar) {
					id = 1;
					$("#txt2").prop("disabled", false);
					$("#submit2").prop("disabled", false);
					$("#txt1").prop("disabled", true);
					$("#submit1").prop("disabled", true);
					 $("#forceEntered").prop("hidden",false);
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + barUsr);


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is "+bar);
				}
			}
			id++;
		}

	});
	  
	  var idb = 1;
	   $("#submit2").click(function() {
//		barsCalculation(phiVal,  ascCorr);
		barusr = $("#txt2").val();
		if (barusr == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idb <= 3) {
				if (barusr >= 4) {

					$("#txt2").prop("disabled", true);
					$("#submit2").prop("disabled", true);
					$("#txt3").prop("disabled", false);
					$("#submit3").prop("disabled", false);
						
				
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + barusr);


				} else if (barusr < 4){
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
										
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect value");

				}


			} else if (idb == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Provide number of bars greater than or equal to four ");


			} else {
				
				//						flow = flowAns.toFixed(2);
				if (barusr >= 4) {
					idb = 1;
					$("#txt2").prop("disabled", true);
					$("#submit2").prop("disabled", true);
					$("#txt3").prop("disabled", false);
					$("#submit3").prop("disabled", false);
					
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + barusr);


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is 4 or greater than 4 ");
				}
			}
			idb++;
		}

	});
	var asp_corr;
	var aspusr;
	function ascprovided(barusr,phiVal){
	var	asp_corr1 = (barusr*3.14*phiVal*phiVal)/4;
		asp_corr = asp_corr1.toFixed(2);
		
	}
	var refmin_corr;
	var refmax_corr;
	var minusr ,maxusr;
	function minref(b_user,dUser){
		var refmin_corr1 = (0.8*b_user*dUser)/100;
		refmin_corr = refmin_corr1.toFixed(2);
		var refmax_corr1 = (6*b_user*dUser)/100;
		refmax_corr = refmax_corr1.toFixed(2);
		
	}
	
	 var ida = 1;
	   $("#submit3").click(function() {

		ascprovided(barusr,phiVal);
		aspusr = $("#txt3").val();
		if (aspusr == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (ida <= 3) {
				if (aspusr == asp_corr) {

					$("#txt3").prop("disabled", true);
					$("#submit3").prop("disabled", true);
					$("#txt4").prop("disabled", false);
					$("#submit4").prop("disabled", false);
						
				
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + aspusr);


				} else if (aspusr != asp_corr){
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
										
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect value");

				}


			} else if (ida == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("No. of bars X &Pi; /4 X &phi;<sup>2<sup> ");


			} else {
				
				//						flow = flowAns.toFixed(2);
				if (aspusr == asp_corr) {
					ida = 1;
					$("#txt3").prop("disabled", true);
					$("#submit3").prop("disabled", true);
					$("#txt4").prop("disabled", false);
					$("#submit4").prop("disabled", false);
					
					$(".modal-header").html("Correct answer");
					$(".modal-header").css("background", "green");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Enter value is " + aspusr);


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is "+asp_corr);
				}
			}
			ida++;
		}

	});

		 var idm = 1;
	   $("#submit4").click(function() {

		minref(b_user,dUser);
		minusr = $("#txt4").val();
		if (minusr == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idm <= 3) {
				if (minusr == refmin_corr) {

					$("#txt4").prop("disabled", true);
					$("#submit4").prop("disabled", true);
					$("#txt5").prop("disabled", false);
					$("#submit5").prop("disabled", false);
						
	


				} else if (minusr != refmin_corr){
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
										
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect value");

				}


			} else if (idm == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Min r<sub>f</sub> = 0.8/100 X b X D ");


			} else {
				
				//						flow = flowAns.toFixed(2);
				if (minusr == refmin_corr) {
					idm = 1;
					$("#txt4").prop("disabled", true);
					$("#submit4").prop("disabled", true);
					$("#txt5").prop("disabled", false);
					$("#submit5").prop("disabled", false);
					

				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is "+refmin_corr);
				}
			}
			idm++;
		}

	});

	 var idx = 1;
	   $("#submit5").click(function() {

		minref(b_user,dUser);
		maxusr = $("#txt5").val();
		if (maxusr == "") {

			$(".modal-header").html("Error Message");
			$(".modal-header").css("background", "#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Submit the value");


		}
		else {
			if (idx <= 3) {
				if (maxusr == refmax_corr) {

					$("#txt5").prop("disabled", true);
					$("#submit5").prop("disabled", true);
				
						
	


				} else if (maxusr != refmax_corr){
					//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
										
					$(".modal-header").html("Error Message");
					$(".modal-header").css("background", "#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Incorrect value");

				}


			} else if (idx == 4) {
				//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");

				$(".modal-header").html("Formula Message");
				$(".modal-header").css("background", "#81caf7");
				$("#btnModal").removeClass("btn-success").addClass("btn-danger");
				$("#MsgModal").html("Max r<sub>f</sub> = 6/100 X b X D ");


			} else {
				
				//						flow = flowAns.toFixed(2);
				if (maxusr == refmax_corr) {
					idx = 1;
					$("#txt3").prop("disabled", true);
					$("#submit3").prop("disabled", true);
					$("#txt4").prop("disabled", false);
					$("#submit4").prop("disabled", false);
					
				


				} else {

					//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

					$(".modal-header").html("Suggest Message");
					$(".modal-header").css("background", "#81caf7");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Correct Answer is "+refmax_corr);
				}
			}
			idx++;
		}

	});



}