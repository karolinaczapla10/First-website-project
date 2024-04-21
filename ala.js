function save1(){
    sessionStorage.setItem(document.getElementById("kod").value,document.getElementById("name").value);
  
       
}

function show(){
    var tresc = " ";
    for( let i=0;i<=sessionStorage.length;i++){
        let key = sessionStorage.key(i);
        tresc+="<div style=background:#"+key+"; width:100%;><label>"+sessionStorage.getItem(key)+" ,kod koloru :"+key+"</label></div></br>";
    }
    document.getElementById("dane").innerHTML=tresc;
        
    }
    


function clears(){
    sessionStorage.clear();
    window.location.reload();
    
}