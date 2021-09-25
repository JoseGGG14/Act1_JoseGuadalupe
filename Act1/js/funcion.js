function mostrarDatos(){
    var datos1="";
    var datos2="";
    var datos3="";
    var datos4="";
    var datos5="";
    datos1=datos1+document.getElementById("futbol").value;
    datos2=datos2+document.getElementById("juegaron").value;
    datos3=datos3+document.getElementById("porque").value;
    datos4=datos4+document.getElementById("partidos").value;
    datos5=datos5+document.getElementById("equipo").value;

    datos='¿Juegas futbol? R= '+datos1+'<br> ¿Con quién juegas futbol? R= '+datos2+'<br> ¿Por que juegas futbol? R= '+datos3+'<br> ¿Ves partidos de futbol? R= '+datos4+'<br> ¿A qué equipo le vas? R= '+datos5;
    document.getElementById("resultado").innerHTML=datos;
}