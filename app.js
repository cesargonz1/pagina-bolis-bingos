// Modo Oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;
const sunIcon = '<i class="ri-sun-line"></i>';
const moonIcon = '<i class="ri-moon-line"></i>';

// Comprobar el estado guardado del modo oscuro en el localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggleDarkModeButton.innerHTML = moonIcon;
}

toggleDarkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar el estado del modo oscuro en el localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggleDarkModeButton.innerHTML = moonIcon;
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleDarkModeButton.innerHTML = sunIcon;
  }
});

// Almacenar el estado de la autenticación (si el usuario ha iniciado sesión correctamente)
let isAdmin = false;

// Función para manejar el inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí podemos colocar los datos del administrador (ejemplo simple)
    const adminUsername = "admin";
    const adminPassword = "1234"; // Utiliza una contraseña segura en producción

    // Comprobar si las credenciales son correctas
    if (username === adminUsername && password === adminPassword) {
        // Si es administrador, mostrar el menú y ocultar el formulario
        document.getElementById("menu-container").style.display = "block";
        document.getElementById("login-container").style.display = "none";

        // Marcar al usuario como administrador
        isAdmin = true;

        // Habilitar los botones de administración
        habilitarBotones();
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Función para habilitar los botones de administración solo para el administrador
function habilitarBotones() {
    if (isAdmin) {
        // Solo habilitar los botones de administración si el usuario es admin
        const productos = document.querySelectorAll('.gallery-item');

        productos.forEach(producto => {
            const btnAgotado = producto.querySelector('.btn-agotado');
            const btnDisponible = producto.querySelector('.btn-disponible');

            // Mostrar ambos botones (solo para admin)
            btnAgotado.style.display = 'inline';
            btnDisponible.style.display = 'none';
        });
    }
}

// Función para marcar un producto como agotado
function marcarAgotado(indice) {
    if (!isAdmin) return; // Si no es admin, no permitir la acción
    
    let productos = document.querySelectorAll('.gallery-item');
    let mensajeAgotado = productos[indice].querySelector('.agotado');
    let btnAgotado = productos[indice].querySelector('.btn-agotado');
    let btnDisponible = productos[indice].querySelector('.btn-disponible');

    mensajeAgotado.style.display = 'inline';
    btnAgotado.style.display = 'none';
    btnDisponible.style.display = 'inline';
}

// Función para marcar un producto como disponible
function marcarDisponible(indice) {
    if (!isAdmin) return; // Si no es admin, no permitir la acción
    
    let productos = document.querySelectorAll('.gallery-item');
    let mensajeAgotado = productos[indice].querySelector('.agotado');
    let btnAgotado = productos[indice].querySelector('.btn-agotado');
    let btnDisponible = productos[indice].querySelector('.btn-disponible');

    mensajeAgotado.style.display = 'none';
    btnAgotado.style.display = 'inline';
    btnDisponible.style.display = 'none';
}














