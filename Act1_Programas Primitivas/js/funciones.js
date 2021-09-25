
function mostrarDatos(){
    var num=document.getElementById("n1").value;
    var r = document.getElementsByName("opcion");
    var html="";
    for(var i=0; i< r.length; i++){
        if(r[i].checked){
            var e = r[i].value;
        }
    }
    switch(e){
        case 'a':
            for(var i=0; i<num; i++){
                html+="<div style='height: 50px; width: 50px; background: red; display: inline-block; margin: 5px;'></div>";
            }
            document.getElementById("resultado").innerHTML=html;
        break;
        case 'b':
            for(var i=0; i<num; i++){
                html+="<div style='height: 50px; width: 50px; background: yellow; display: inline-block; margin: 5px;'></div>";
            }
            document.getElementById("resultado").innerHTML=html;
        break;
        case 'c':
            for(var i=0; i<num; i++){
                html+="<div style='height: 50px; width: 50px; background: blue; display: inline-block; margin: 5px;'></div>";
            }
            document.getElementById("resultado").innerHTML=html;
        break;
    }
}