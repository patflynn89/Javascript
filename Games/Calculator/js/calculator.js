$(document).ready(function(){
    alert("test");
    function result(first) {
        return (first+3);
    }
    document.getElementById("ergebnis").innerHTML = result(1);
    $("p").click(function () { 
        $(this).hide();
    });
    
});


