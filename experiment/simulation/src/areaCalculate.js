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
var ascCal;
var acCal;
var colType ;
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

//			$(".modal-header").html("Error Message");
//			$(".modal-header").css("background", "#9c1203b0");
//			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//			$("#MsgModal").html("Submit the value");

			toastr.error('<span class="blinking1">Enter Values between 20 mm to 70 mm</span>');
		}
		else {
			if (id <= 3) {
				if (acsUser >= 0.8 && acsUser <= 6) {
						calculteAg(acsUser);
					$("#labelrow").prop("hidden", false);
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
						calculteAg(acsUser);
					$("#labelrow").prop("hidden", false);
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
		ag_corr = ((pu_user * 1000) / stp4).toFixed(2);
		ag_corr = parseFloat(ag_corr);
		console.log("ag corect = " + ag_corr);
		var ascCal1 = ((acsUser /100)*ag_corr).toFixed(2);
			ascCal = parseFloat(ascCal1);
		var acCal1 = ag_corr - ascCal;
			acCal = acCal1.toFixed(2);
		 	acCal = parseFloat(acCal);
		  label = '<div class = "row" id = "labelrow" hidden>'
		  +'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-2">'
		  +'</div>'
         +'<div class="col-sm-8 marginBottom"  style="align:center;" id="shearLabel">'
         +' <center><label class="labelstyle " > Ag = '+ag_corr+' mm<sup>2</sup> </label></center> '
      	+'</div>'
      	+'</div>'
      	 +'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-2">'
		  +'</div>'
      	 +'<div class="col-sm-8 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > Asc = '+ascCal+' mm<sup>2</sup> </label></center> '
      	+'</div>'
      	+'</div>'
      	
      	 +'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-2">'
		  +'</div>'
      	 +'<div class="col-sm-8 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > Ac = '+acCal+' mm<sup>2</sup>  </label></center> '
      	+'</div>'
      	+'</div>'
      	+'</div>'
      	
       +'<div class="row">'
	   +'<div class="col-sm-3">'
	   +'<label class="labelstyle marginBottom">Type of Column </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-4">'
	   +'<select  class="form-control selectConf marginBottom" id="type" " style="height:auto; ">'
	   +'<option value="0">--- column type --- </option>'
	   +'<option value="1" >Rectangle  </option>'
//	   +'<option value="2" > Circle</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>' 
     
     $("#page3Div1").append(label);
     
     	  $("#type").change(function(){
	colType = $("#type").val();
	console.log("type"+colType);
	});
   
	}
	

	


	 
 	
		
		
		}