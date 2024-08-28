alert("Cao Nikolice kako si mi");
alert("Za ovo ti je potrebna komunikacija samo da znas")
alert("Aljosa i ti imate hintove koji vam zapravo pomazu ali on ima tvoje a ti njegove tako da...")
alert("SRETNO")

function potvrdi(){
    let unesen_tekst = document.getElementById("unesen_tekst").value;
    
    if(unesen_tekst === "Vedran" || unesen_tekst === "vedran" || unesen_tekst === "VEDRAN" ){
        alert("bravo");
    }else{
        alert("greska")
    }
    }
    