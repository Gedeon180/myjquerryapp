let whicha = document.getElementById("edititem").value;
		let stata=document.getElementById("statum").value;
        let found2 = false;
function changing(){
        
		let whicha = document.getElementById("edititem").value;
		let stata=document.getElementById("statum").value;
        let found2 = false;
        for(var i = 0; i < Notes.length; i++) 
        {
            if(Notes[i].title === whicha){
                Notes[i].statut=stata; 				
                
				found2 = true;
            }
        }
        if(!found2){
            document.getElementById("statum").value = "Sorry, could not find";
        }

     };
	 
	 $(document).on('pagebeforeshow', '#AddDelete', function () {
        document.getElementById("title").value = ""; 
        document.getElementById("day").value = ""; 
        document.getElementById("time").value  = ""; 
		document.getElementById("statut").value  = ""; 
		document.getElementById("deleteItem").value  = ""; 
	 });
	$(document).on('pagebeforeshow', '#Edit', function () {
        document.getElementById("edititem").value = ""; 
        document.getElementById("statum").value = ""; 
        document.getElementById("edititem2").value  = ""; 
		
    });
	
	let whicha2 = document.getElementById("edititem2").value;
	let found3 = false;
	
	function changing2(){
		let whicha2 = document.getElementById("edititem2").value;
	let found3 = false;
	
	for(var i = 0; i < Notes.length; i++) 
        {
            if(Notes[i].title === whicha2){
				document.getElementById("section1").style.display = "none";
 	            document.getElementById("section2").style.display = "block";
			document.getElementById("day2").value=Notes[i].day;
            document.getElementById("title2").value=Notes[i].title; 				
            document.getElementById("time2").value=Notes[i].time;
			document.getElementById("statut2").value=Notes[i].statut;
				found3 = true;
            };
        };
        if(!found3){
            document.getElementById("edititem2").value = "Sorry, could not find";
	};};

     
	
	//function gothere( ) {
 	//section1.style.display = "none";
 	//section2.style.display = "block";
 //};
 
//function gohome(){section1.style.display = "block";
 	//section2.style.display = "none";}
	function changing3(){let whicha2 = document.getElementById("edititem2").value;
	for(var i = 0; i < Notes.length; i++) 
		{if(Notes[i].title === whicha2)
	{Notes[i].day=document.getElementById("day2").value;
            Notes[i].title=document.getElementById("title2").value; 				
            Notes[i].time=document.getElementById("time2").value;
	Notes[i].statut=document.getElementById("statut2").value;};};
	document.getElementById("section1").style.display = "block";
 	document.getElementById("section2").style.display = "none";}