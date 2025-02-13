$('#pagination-demo').twbsPagination({
	
        totalPages: 4,
        visiblePages: 0,
        next: '<img src="images/right-arrow.png" style="height:19px;">',
        prev: '<img src="images/back-button.png" style="height:19px;">',
        
        onPageClick: function (event, page) {
            //fetch content and render here
           
       if(page==1){
    	   		
            	$("#page1").prop("hidden",false);
            		
            	 $("#page2,#page3").prop("hidden",true);
            }
            else if(page==2){
            	
            	$("#page2").prop("hidden",false);
//            	page2();
				loadCalculate();
            	 $("#page1,#page3").prop("hidden",true);
            }
            else if(page==3){
            	
            	$("#page3").prop("hidden",false);
//            	page3();

				areaCalculate();
				flg = 1;
				simplySupported();
            	 $("#page1,#page2").prop("hidden",true);
            }else if(page==4){
            	
            	$("#page4").prop("hidden",false);
				page4();
				flg = 2;
				simplySupported();
            	 $("#page1,#page2,#page3").prop("hidden",true);
            }
           
            
        }

    });