document.getElementById('CargarContenido').addEventListener('click', function() {
        const fileInput = document.getElementById('SubirArchivo');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const contents = e.target.result;
                console.log(contents); 
                document.getElementById('MostrarContenido').textContent = contents;
            };
            reader.readAsText(file);
        } else {
            alert('Por favor, selecciona un archivo.');
        }
});

document.getElementById("Boton").addEventListener("click", function() {

    let correo = document.getElementById("Correo").value;
    let contraseña = document.getElementById("Contraseña").value;

    alert(correo + " " + contraseña);

    console.log("Boton presionado. Correo ingresado: " + correo);
    console.log("Boton presionado. Contraseña ingresada: " + contraseña);

    document.getElementsByTagName("p")[0].innerText = "El correo ingresado es: " + correo;
    document.getElementsByTagName("p")[1].innerText = "La contraseña ingresada es: " + contraseña;

    });