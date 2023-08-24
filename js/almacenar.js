// Definimos la función para cargar la lista desde el almacenamiento local y mostrarla en la página
function cargarListado() {
    const listaGuardada = localStorage.getItem('listaItems'); // Obtiene la lista guardada del almacenamiento local
    if (listaGuardada) {
      document.getElementById('contenedor').innerHTML = listaGuardada; // Muestra la lista en el contenedor si está presente
    }
  }
  
  // Definimos la función para guardar la lista en el almacenamiento local
  function guardarListado() {
    const listaItems = document.getElementById('contenedor').innerHTML; // Obtiene el contenido HTML del contenedor
    localStorage.setItem('listaItems', listaItems); // Guarda el contenido HTML como 'listaItems' en el almacenamiento local
  }
  //Asumimos que deberiamos de utilizar boostrap al crear el nuevo item sin embargo desconocemos como llamar el framework
  // Definimos la función para agregar un nuevo ítem a la lista
  function agregarItem() {
    const nuevoItem = document.getElementById('item').value.trim(); // Obtiene el nuevo ítem del input y elimina espacios en blanco
    if (nuevoItem !== '') { // Si el nuevo ítem no está vacío
      const contenedor = document.getElementById('contenedor'); // Obtiene el contenedor de la lista
      const nuevoElemento = document.createElement('li'); // Crea un nuevo elemento <li> para el ítem 
      nuevoElemento.textContent = nuevoItem; // Establece el texto del elemento como el nuevo ítem
      contenedor.appendChild(nuevoElemento); // Agrega el nuevo elemento al contenedor
      guardarLista(); // Guarda la lista actualizada en el almacenamiento local
      document.getElementById('item').value = ''; // Limpia el campo de entrada
    }
  }
  
  // Definimos la función para limpiar la lista y el almacenamiento local
  function limpiarListado() {
    document.getElementById('contenedor').innerHTML = ''; // Limpia el contenido del contenedor (elimina la lista)
    localStorage.removeItem('listaItems'); // Elimina la entrada 'listaItems' del almacenamiento local
  }
  
  // Se Carga el DOM al cargar la página y llamamos a las funciones al hacer clic en los botones Agregar o Limpiar 
  document.addEventListener('DOMContentLoaded', () => {
    cargarListado(); // Cargamos y muestra la lista almacenada al cargar la página
    document.getElementById('agregar').addEventListener('click', agregarItem); // Agregamos evento clic al botón 'Agregar'
    document.getElementById('limpiar').addEventListener('click', limpiarListado); // Agregamos evento clic al botón 'Limpiar'
  });
  
