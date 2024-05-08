// boton copiar:
document.addEventListener('DOMContentLoaded', function () {
  // Obtén una lista de todos los botones de copia
  const copyButtons = document.querySelectorAll('.copy-button');

  // Agrega un controlador de eventos de clic a cada botón
  copyButtons.forEach(function (copyButton, index) {
    // Encuentra el bloque de código correspondiente
    const codeBlock = document.querySelectorAll('pre.dark code')[index];

    // Agrega el controlador de eventos de clic al botón actual
    copyButton.addEventListener('click', function () {
      // Crea un elemento de área de texto oculto
      const textArea = document.createElement('textarea');
      textArea.value = codeBlock.textContent;

      // Agrega el área de texto oculto al documento
      document.body.appendChild(textArea);

      // Selecciona y copia el contenido del área de texto
      textArea.select();
      document.execCommand('copy');

      // Elimina el área de texto oculto
      document.body.removeChild(textArea);

      // Cambia el texto del botón para indicar que se ha copiado
      copyButton.textContent = '✔ Copiado!';
    });
  });
});


// Funciona nav 
// Opcional: Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.menu-hamburguesa ul a').forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('toggle-menu').checked = false;
  });
});
