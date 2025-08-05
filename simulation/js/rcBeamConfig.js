var conVal;
var steelVal;
var len;
var selection = '<div class="row">'
//	   +'<div class="col-sm-5">'
//	   +'<label class="labelstyle marginBottom" >Select Type of Beam : </label>'
//	   +'</div>'
//	   
//	   +'<div class="col-sm-6">'
//	   +'<select  class="form-control selectConf marginBottom" id="beamType"  style="height:auto;">'
//	   +'<option value="0">--------- Select beam type --------- </option>'
//	   +'<option value="1" >Simply supported beam  </option>'
//	   +'<option value="2" disabled>Continous beam  </option>'
//	   	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   
	     +'<div class="row">'
	     +'<div class="col-sm-5">'
	     +'<label class="labelstyle marginBottom">Enter Working Load (P) : </label>'
	     +'</div>'
		 +'<div class="col-sm-3">'
	     +'<input  id="presText" style= "width:100%;"  class=" form-control marginBottom" >'
	     +'</div>'
	     +'<div class="col-sm-3">'
	    +'<button type="button"   class="btn btnDesign" style = "width:100%;" id="subPre" data-toggle="modal" data-target="#myModal" ><b>SUBMIT</b></button>'
	    +'</div>'
	     +'</div>'
	     
	   +  '<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto; " disabled>'
	   +'<option value="0">--- Select grade of concrete --- </option>'
	   +'<option value="10" >M10  </option>'
	   +'<option value="15" >M15  </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'		    
	  
	   +'</select>'
	  
	   +'</div>'
	   +'<div class="col-sm-3 col-md-3" id="concreteLabel" hidden>'
//	   +'<label class="labelstyle marginBottom " style="margin-top:-5px;">  </label>'
	   +'<span id = "relTemp" class="labelstyle spanMsg"> f<sup>ck</sup>'+conVal+' </span>'
	   +'</div>'
	   +'</div>'
	   	   
	   + '<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Steel : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto; " disabled>'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500" >Fe500  </option>'
	  
	   +'</select>'	   
	  
	   +'</div>'
	   +'<div class="col-sm-3" id="steelLabel" hidden>'

	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   +'</div>'
	   

	   
	    +'<div class="row">'
	     +'<div class="col-sm-5">'
	     +'<label class="labelstyle marginBottom">Unsupported length lx (m) : </label>'
	     +'</div>'
	    
		 +'<div class="col-sm-6">'
	     +'<input  id="lx_val" style= 10px;width:100%;"  class=" form-control marginBottom" disabled>'
	     +'</div>'
	     
	     +'</div>'
	     
	     +'<div class="row">'
	     +'<div class="col-sm-5">'
	     +'<label class="labelstyle marginBottom">Unsupported length ly (m)  : </label>'
	     +'</div>'
		 +'<div class="col-sm-6">'
	     +'<input  id="ly_val" style= 10px;width:100%;"  class=" form-control marginBottom" disabled>'
	     +'</div>'	     
	     +'</div>'	
	     	     
    	   +'<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Support Conditions: </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf marginBottom" id="support" " style="height:auto; " disabled>'
	   +'<option value="0">--- Support condition --- </option>'
	   +'<option value="1" >Both ends fixed  </option>'
	   +'<option value="2" >One end fixed and other is pinned </option>'
	   +'<option value="3" >Both ends pinned </option>'
	   +'<option value="4" >One end fixed and other is free </option>'
	   
	  
	   +'</select>'
	   +'</div>'
	   +'</div>' 
	  
//	     +'<div class="row">'
//	     +'<div class="col-sm-5">'
//	     +'<label class="labelstyle marginBottom">Enter Pu value : </label>'
//	     +'</div>'
//		 +'<div class="col-sm-3">'
//	     +'<input  id="puText" style= "width:100%;"  class=" form-control marginBottom" disabled>'
//	     +'</div>'
//	     +'<div class="col-sm-3">'
//	    +'<button type="button"   class="btn btnDesign" style = "width:100%;" id="subPu" data-toggle="modal" data-target="#myModal" disabled  ><b>SUBMIT</b></button>'
//	    +'</div>'
//	     +'</div>'
	     
	      +'<div class="col-sm-12">'
	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg" data-toggle="modal" data-target="#myModal" hidden><b>CONFIGURE </b></button>'
//	    +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nextLevelForConfig"  disabled><b>NEXT LEVEL</b></button>'
	     
	   
	   $("#page1Div2").html(selection);
	   
	   $("#procedure").click(function(){
		modelImg = '<img src="images/typesOfSupports.png" class="img-responsive" alt="Cinque Terre">'
		$(".modal-header").html("Reference Table");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html(modelImg);
	});
	   
	   
	
	var pre;
	$("#subPre").click(function(){
		pre = $("#presText").val();
		console.log("p vale"+pre);
		if(pre == ""){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Enter Appropriate Value</b>");
		}else{
			if(pre > 0){
			$("#subLength").prop("disabled",true);
			$("#lengthText").prop("disabled",true);
			$("#concreteGrade").prop("disabled",false);
//			length();
			}else{
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Enter Appropriate Value</b>");	
			}
		}
	});
	   
	 
	$("#concreteGrade").change(function(){
		conVal = $("#concreteGrade").val();
          if(conVal==0){
	alert("Select Appropraite Values");
    }else{
	$("#subPre").prop("disabled",true);	
	$("#presText").prop("disabled",true);	
	$("#concreteGrade").prop("disabled",true);
	$("#steelGrade").prop("disabled",false);	
	$("#concreteLabel").prop("hidden",false);	
	
	$("#relTemp").text("fck = "+conVal+"Mpa");
}        
	});
	
	$("#steelGrade").change(function(){
		steelVal = $("#steelGrade").val();
		if(steelVal==0){
			alert("Select Appropraite Values");
		}else{
		  $("#steelGrade").prop("disabled",true);
		  $("#steelLabel").prop("hidden",false);	
		  $("#relTemp1").text("fy = "+steelVal+"Mpa");
//		  $("#support").prop("disabled",false);
//		  $("#checkConfg").prop("disabled",false);
		  $("#lx_val").prop("disabled",false);
		 
		}
	});
	
	
	var lx ;
	$("#lx_val").change(function(){
		lx = $("#lx_val").val();
		if(lx == 0){
			alert("Select Appropraite Values");
		}else{
		  $("#steelGrade").prop("disabled",true);
		  $("#steelLabel").prop("hidden",false);	
//		  $("#relTemp1").text("Strength : "+steelVal+"Mpa");
//		  $("#support").prop("disabled",false);
//		  $("#checkConfg").prop("disabled",false);
		  $("#lx_val").prop("disabled",true);
		   $("#ly_val").prop("disabled",false);
		 
		}
	});
	
	var ly ; 
	
	$("#ly_val").change(function(){
		ly = $("#ly_val").val();
		if(ly == 0){
			alert("Select Appropraite Values");
		}else{
		  $("#steelGrade").prop("disabled",true);
		  $("#steelLabel").prop("hidden",false);	
//		  $("#relTemp1").text("Strength : "+steelVal+"Mpa");
		   $("#lx_val").prop("disabled",true);
		   $("#ly_val").prop("disabled",true);
		  $("#support").prop("disabled",false);
//		  $("#checkConfg").prop("disabled",false);
//		  $("#ly_val").prop("disabled",false);
		 
		}
	});
	 
	 
	 var support;
	$("#support").change(function(){
		support = $("#support").val();
		if(support==0){
			alert("Select Appropraite Values");
		}else{
			
		  $("#steelGrade").prop("disabled",true);
		  $("#steelLabel").prop("hidden",false);	
//		  $("#relTemp1").text("Strength : "+steelVal+"Mpa");
		   $("#lx_val").prop("disabled",true);
		   $("#ly_val").prop("disabled",true);
		  $("#support").prop("disabled",true);
//		   $("#checkConfg").prop("disabled",false);
//		    $("#nextLevelForConfig").prop("disabled",false);
//		    $("#puText").prop("disabled",false);
		   
		  
		}
	});
   
   
    var pu_val;
    var pu_corr ; 
    pu_corr = pre * 1.5;
	$("#subPu").click(function(){
		pu_val = $("#puText").val();
		console.log("presuure"+pu_val);
		pu_corr = pre * 1.5;
		console.log("presuure correct "+pu_corr);
		if(pu_val == 0){
			alert("Select Appropraite Values");
		}else{
			
		  $("#steelGrade").prop("disabled",true);
		  $("#steelLabel").prop("hidden",false);	
//		  $("#relTemp1").text("Strength : "+steelVal+"Mpa");
		   $("#lx_val").prop("disabled",true);
		   $("#ly_val").prop("disabled",true);
		  $("#support").prop("disabled",true);
		  
		}
	});
	
	
	

	
   $("#checkConfg").click(function(){
	var magVal = $("#magnitude").val();
   var widthVal = $("#width").val();
   var ratioVal = $("#ratio").val();
   var depthVal = $("#depth").val();
   

  
	 		  
	
});

 

var flg = 0;
   $("#nextLevelForConfig").click(function(){
	flg=1
	$("#canvas-div").html('');
	$("#main-div-conf").html('');
	var htm = '<img src="images/column_types.png" class="img-fluid" >'
      $("#main-div-conf").html(htm);
	$("#centerText1").html('');
$("#centerText2").html('');
//	                                                                                                                                                                                                                                                                                                                                                                          "#main-div-conf").html(funOver);
	loadCalculate();
	
	});