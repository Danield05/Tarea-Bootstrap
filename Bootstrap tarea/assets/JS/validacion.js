document.addEventListener("DOMContentLoaded", function () {
  // Inicializar el temporizador a null
  let timeout = null;

  // Al activar el evento click del botón guardar
  document.getElementById("btn-guardar").addEventListener("click", function () {
    // Permite que obtenga los valores de los campos de entrada
    var codigo = document.getElementById("codigo").value;
    var descripcion = document.getElementById("descripcion").value;
    var codigobarra = document.getElementById("codigobarra").value;
    var preciounitario = document.getElementById("preciounitario").value;
    var stock = document.getElementById("stock").value;
    var proveedor = document.getElementById("proveedor").value;
    var categoria = document.getElementById("categoria").value;

    // Verificando si algún campo está vacío
    if (
      codigo == "" ||
      descripcion == "" ||
      codigobarra == "" ||
      preciounitario == "" ||
      stock == "" ||
      proveedor == "" ||
      categoria == ""
    ) {
      document.getElementById("mensaje").innerHTML =
        "<div class='alert alert-danger'>Por favor llene todos los campos.</div>";
    } else {
      // Habilitar el botón de guardar
      document.getElementById("btn-guardar").disabled = false;

      // Mostrar mensaje de éxito
      document.getElementById("mensaje").innerHTML =
        "<div class='alert alert-success'>Los datos han sido guardados correctamente.</div>";

        
      // Cancelar el temporizador anterior, si existe
      if (timeout) {
        clearTimeout(timeout);
      }

      // Establecer un nuevo temporizador para ocultar el mensaje después de 10 segundos
      timeout = setTimeout(function () {
        document.getElementById("mensaje").innerHTML = "";
      }, 3000);//Esperar 3 segundos
    }
  });

  // Restablecer el temporizador a null cuando se cambie el valor de un campo de entrada
  document.querySelectorAll("input[type='text'], input[type='checkbox'], select").forEach(function(input) {
    input.addEventListener("input", function() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      // Verificar si todos los campos están llenos
      if (
        document.getElementById("codigo").value != "" &&
        document.getElementById("descripcion").value != "" &&
        document.getElementById("codigobarra").value != "" &&
        document.getElementById("preciounitario").value != "" &&
        document.getElementById("stock").value != "" &&
        document.getElementById("proveedor").value != "" &&
        document.getElementById("categoria").value != ""
      ) {
        // Habilitar el botón de guardar
        document.getElementById("btn-guardar").disabled = false;
      } else {
        // Deshabilitar el botón de guardar
        document.getElementById("btn-guardar").disabled = true;
      }
    });
  });
});
