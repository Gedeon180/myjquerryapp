
Notes = [];
Notess=[];
Notesd=[];
Notesn=[];


Notes.push(new Note("Eng101", "Moonday 5/18","11:59 pm", "d"));
Notes.push(new Note("Prog209", "Monday 5/18", "11:59 pm","n"));
Notes.push(new Note("Play vid game", "Saturday 7/23", "10:30 am","s"));


document.addEventListener("DOMContentLoaded", function (event) {

    
    UpdateDisplay(listUl);  

    $(document).on('pagebeforeshow', '#Home', function () {
        let listUl = document.getElementById("listUl");
        UpdateDisplay(listUl);
    }
    );

    
    $(document).on('pagebeforeshow', '#Delete', function () {
        let deleteListUl = document.getElementById("deleteListUl");
        UpdateDisplay(deleteListUl);   
        document.getElementById("deleteItem").value = "";  
    }
    );


     

    document.getElementById("newNote").addEventListener("click", function () {
        
        Notes.push( new Note( document.getElementById("title").value, 
        document.getElementById("day").value,
        document.getElementById("time").value ,document.getElementById("statut").value));
     });

     
     document.getElementById("delete").addEventListener("click", function () {
        let which = document.getElementById("deleteItem").value;
        let found = false;
        for(var i = 0; i < Notes.length; i++)
        {
            if(Notes[i].title === which){
                Notes.splice(i,1);  
                found = true;
            }
        }
        if(!found){
            document.getElementById("deleteItem").value = "Sorry, could not find";
        }

     });
});  


function Note(pTitle, pDay, pTime,pStatut) {
    this.title= pTitle;
    this.day = pDay;
    this.time = pTime;
	this.statut=pStatut;
	this.wording= function(){return this.title+" due on "+this.day+" at "+this.time}
  }


 function UpdateDisplay(whichElement) {
    whichElement.innerHTML = "";
    
    Notes.sort(function(a, b) {
        return (a.priority) - (b.priority);
    });
    Notes.forEach(function(item, index) {
        var li = document.createElement('li');
        whichElement.appendChild(li);
        li.innerHTML=li.innerHTML + ": " + " You have " + item.title + " due on " + item.day + " at " + item.time+ item.statut;
    }); // build one li for each item in array
	
	let displaytitles=document.getElementById("displaytitles");
	let displaytitles2=document.getElementById("displaytitles2");
	let titles="";
	function salayango(){for (i=0;i<=Notes.length-1;i++){titles+=" "+Notes[i].title+ " , "};return "<b>As a Reminder, These are Your titles names : " +titles+ "</b>";};
	
	displaytitles.innerHTML=salayango();
	displaytitles2.innerHTML="<b>As a Reminder, These are Your titles names : " +titles+"</b>";
	
	let Notesd = Notes.filter(item => item.statut == "d");
	let Notess = Notes.filter(item => item.statut == "s");
	let Notesn = Notes.filter(item => item.statut == "n");
	Note.prototype.toString = function () 
{return this.title+" due on "+ this.day+ " at "+ this.time+"<br>";};

	document.getElementById("listUl2").innerHTML=Notess;
	document.getElementById("listUl3").innerHTML=Notesd;
    document.getElementById("listUl").innerHTML=Notesn;
};