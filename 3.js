document.getElementById("Boton").addEventListener("click", function() {
    
    let fecha = document.getElementById("Fecha").value;

     alert(fecha);

    console.log("Boton presionado. Fecha ingresada: " + fecha);

    document.getElementsByTagName("p")[0].innerText = "La fecha ingresada es: " + fecha;

    });

document.getElementById('CargarContenido').addEventListener('click', function() {
    const pdfInput = document.getElementById('SubirPdf');
        const pdfFile = pdfInput.files[0];

        if (pdfFile) {
            const pdfUrl = URL.createObjectURL(pdfFile);
            console.log(pdfUrl); 
            document.getElementById('MostrarPdf').src = pdfUrl;
        } else {
            alert('Por favor, selecciona un archivo PDF.');
        }
});    