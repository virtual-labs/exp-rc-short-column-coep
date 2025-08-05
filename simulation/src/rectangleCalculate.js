var bCal;
var dCal;
var lmin_corr;
var ymin_corr;
function rectCalculate()
{		
	if(colType == 1){ 
		flg = 0;
		labels1 = '<div class="col-sm-12" id="forceEntered" >'
		+ '<div class="col-sm-5">'
		+ '<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> b/D Ratio:  </label>'
		+ '</div>'
		+ '<div class="col-sm-3" id="valueStep1">'
		+ '<input type="text"  value="" id="ratiotxt"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
		+ '</div>'
		+ '<div class="col-sm-3"  id="submitStep1">'
		+ '<br><button type="submit" class="btn btn-danger"  id="ysubmit"  style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
		+ '</div>'
		+ '</div>'
		$("#page4Div1").html(labels1);
		
			$("#ysubmit").click(function() {
				yuser = $("#ratiotxt").val();
				
		
				calculate();
				dfg = 1;
	            simplySupported();
			
				
				
		});	
		
		function calculate(){
			var dCal1 = Math.sqrt(ag_corr/yuser);
			var dround = Math.ceil((dCal1+1)/100)*100;
//			Math.round(number/100)*100
			var bCal1 = ag_corr/dround;
			var bround = Math.ceil((bCal1+1)/100)*100;
			dCal = dround;
			bCal = bround;
			var x1 = (lx_user/dCal).toFixed(2);
			x1 = parseFloat(x1);
			var x2 = (ly_user/bCal).toFixed(2);
			x2 = parseFloat(x2);
			console.log("D-"+dround);
			console.log("B-"+bCal);
			console.log("ratio"+x1, x2);
			var lmin = ((lx ) / 500) + (dCal / 30);
			if (lmin > 20) {
			lmin_corr = lmin;}
			else {
				lmin_corr = 20;
			}
			var lmin1 = dCal * 0.05;
			
			var ymin = ((ly ) / 500) + (bCal / 30);
			if (ymin > 20) {
			ymin_corr = ymin;

			}
			else {
			ymin_corr = 20;
			}
			ymin_corr = ymin;
			var ymin1 = bCal * 0.05;
			
			
			label = '<div class = "row" id = "labelrow" >'
			+'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-2">'
		  +'</div>'	
           +'<div class="col-sm-8 marginBottom" id="shearLabel">'
           +' <center><label class="labelstyle " > Calculated value of D is '+dCal+'  </label></center> '
      	    +'</div>'
      		+'</div>'
      	
      	+'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-2">'
		  +'</div>'
      	 +'<div class="col-sm-8 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " >  Calculated value of B is '+bCal+'  </label></center> '
      	+'</div>'
      	+'</div>'
      	
      	+'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-3">'
		  +' <center><label class="labelstyle " > Checks for short column </label></center> '
		  +'</div>'	
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > l<sub>ex</sub>/D is '+x1+'  </label></center> '
      	+'</div>'
      	+'</div>'
      	
      	+'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-3">'
		  +'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > l<sub>ey</sub>/b is '+x2+'  </label></center> '
      	+'</div>'
      	+'</div>'
      	if(x1>12 && x2>12){
			label +='<div class = "row" id = "labelrow" >'
         +'<div class="col-sm-8 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > The given module for design of short column not applicable  </label></center> '
      	+'</div>'
      	+'</div>'
		 }else{
			 label += '<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-3">'
		   +' <center><label class="labelstyle " > Checks for axially loaded column </label></center> '
		  +'</div>'	 
         +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > (l/500) + (D/30) = '+lmin_corr.toFixed(2)+'  </label></center> '
      	+'</div>'
      	+'</div>'
      	
      	+'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-3">'
		  +'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > (l/500) + (b/30) =  '+ymin_corr.toFixed(2)+'  </label></center> '
      	 +'</div>'
      	 +'</div>'
      	 
      	 +'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-3">'
		  +'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > e<sub>xmin</sub> = '+lmin_corr.toFixed(2)+' < 0.05 X '+dCal+'  </label></center> '
      	 +'</div>'
      	 +'</div>'
      	 
      	 +'<div  class="col-sm-12 marginBottom">'
		  +'<div class="col-sm-3">'
		  +'</div>'
      	 +'<div class="col-sm-6 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > e<sub>ymin</sub>  =  '+ymin_corr.toFixed(2)+' < 0.05 X '+bCal+' </label></center> '
      	 +'</div>'
      	 +'</div>'
      
      	 if(ymin_corr >! ymin1 && lmin_corr >! lmin1){
			   	label +='<div class = "row" id = "labelrow" >'
         +'<div class="col-sm-10 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > Hence, the column is a short column and axially loaded. Thus, providing column of size '+dCal+'mm X '+bCal+'mm </label></center> '
      	+'</div>'
      	+'</div>'
      	+'</div>'
			   
		   }else{
			   	label +='<div class = "row" id = "labelrow" >'
         +'<div class="col-sm-8 marginBottom" id="shearLabel">'
         +' <center><label class="labelstyle " > The given module for design of short axially loaded column not applicable </label></center> '
      	+'</div>'
      	+'</div>'
		   }
		 }
		 
     
     $("#page4Div1").append(label);
		}
		}
		else if (colType == 2){
			var diameter = Math.sqrt((ag_corr*4)/3.14);
			diameter = diameter.toFixed(2);
			
			label = '<div class = "row" id = "labelrow" >'
        	 +'<div class="col-sm-2 marginBottom" id="shearLabel">'
       	 	 +' <center><label class="labelstyle " > D = '+diameter+'  </label></center> '
      		+'</div>'
      		+'</div>'
			
			var x1 = (lx_user/diameter).toFixed(2);
			x1 = parseFloat(x1);
			if(x1 > 12){
				
			}else{
				console.log("ok");
				label+= '<div class = "row" id = "labelrow" >'
        	 +'<div class="col-sm-2 marginBottom" id="shearLabel">'
       	 	 +' <center><label class="labelstyle " > process  </label></center> '
      		+'</div>'
      		+'</div>'
			
			
			var lmin = ((lx * 1000) / 500) + (diameter / 30);
			if (lmin > 20) {
			lmin_corr = lmin;}
			else {
				lmin_corr = 20;
			}
			var lmin1 = 0.05*diameter;
			if(lmin_corr >! lmin1){
				label+= '<div class = "row" id = "labelrow" >'
        	 +'<div class="col-sm-2 marginBottom" id="shearLabel">'
       	 	 +' <center><label class="labelstyle " > process  </label></center> '
      		+'</div>'
      		+'</div>'
				
			}else{
				label+= '<div class = "row" id = "labelrow" >'
        	 +'<div class="col-sm-2 marginBottom" id="shearLabel">'
       	 	 +' <center><label class="labelstyle " >not process  </label></center> '
      		+'</div>'
      		+'</div>'
				 
			}
			
			
			}
			
			 $("#page4Div1").html(label);
			
		}	
	
}