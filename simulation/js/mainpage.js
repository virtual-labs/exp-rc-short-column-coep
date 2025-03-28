let MasterJson={};
let a=b=0	
var htm=''
	+'<div class="row">'
	+'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Larger Dimension(Ly)mm: </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;"  class=" form-control marginBottom" id="ly" / >'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    
    +'<div class="row"  >'
    +'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Enter Smaller Dimension (Lx)mm: </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;"  class=" form-control marginBottom" id="lx"  / >'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    +'<div class="row"  >'
    +'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">Answer </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;"  class=" form-control marginBottom" id="lxans"  / >'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    +'<div class="row" id="label12" hidden>'
    +'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-10">'
	+'<label class="labelstyle marginBottom" id="anslabel"> </label>'
	+'</div>'
	
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    $("#page1Div2").html(htm);

$("#lx").change(function(){
	console.log("gfghg");
	MasterJsonSet();
	MasterJsonGet();

	});

$("#edit").click(function(){
	console.log("edit");
	MasterJsonUpdate();

	});
$("#update").click(function(){
	console.log("update");
	MasterJsonSet();

	});

function MasterJsonSet(){
	var tempJson = {};
	a=parseInt($("#ly").val());
	b= parseInt($("#lx").val());
	ans=a+b;
    tempJson.ly =a;
    tempJson.lx = b;
    tempJson.ans=ans;
    
    $("#label12").prop("hidden",false);
    $("#anslabel").html("Addition of "+ans);
    
	MasterJson.page1 = tempJson;
	console.log(MasterJson);
	 $("#lx,#ly,#lxans").prop("disabled",true);	
	
}
function MasterJsonGet(){
   
    $("#ly").val(MasterJson.page1.ly);
    $("#lx").val(MasterJson.page1.lx);
	$("#lxans").val(MasterJson.page1.ans);
	
}
function MasterJsonUpdate(){
	 $("#lx,#ly,#lxans").prop("disabled",false);
//	 MasterJsonSet();
}
   