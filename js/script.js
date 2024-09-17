const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed("#typed-output", {
        strings: ["Programador Java Jr"],
        typeSpeed: 70,
        backSpeed: 55,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('header a');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.hash.substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset = document.querySelector('header').offsetHeight;
                var targetOffset = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var certificados = {
        "buttonCertificadoUno": ["images/fullStackEgg.png"],  // Contenedor 1 - Un certificado
        "buttonCertificadoDos": ["images/CertificadoArgPro1.png", "images/CertificadoArgPro2.png"],  // Contenedor 2 - Dos certificados
        "buttonCertificadoTres": ["images/CertificadoCaC.png"],  // Contenedor 3 - Un certificado
        "buttonCertificadoCuatro": ["images/CertificadoUdemy.jpg"]  // Contenedor 4 - Un certificado
    };

    var contenedorFlotante = crearContenedorFlotante("contenedorFlotante", []);

    // Botones
    var certificadoButtonUno = document.getElementById("buttonCertificadoUno");
    var certificadoButtonDos = document.getElementById("buttonCertificadoDos");
    var certificadoButtonTres = document.getElementById("buttonCertificadoTres");
    var certificadoButtonCuatro = document.getElementById("buttonCertificadoCuatro");

    // Asignar eventos a los botones
    certificadoButtonUno.addEventListener("click", function (e) {
        e.preventDefault();
        mostrarContenedorFlotante(contenedorFlotante, certificados["buttonCertificadoUno"]);
    });

    certificadoButtonDos.addEventListener("click", function (e) {
        e.preventDefault();
        mostrarContenedorFlotante(contenedorFlotante, certificados["buttonCertificadoDos"]);
    });

    certificadoButtonTres.addEventListener("click", function (e) {
        e.preventDefault();
        mostrarContenedorFlotante(contenedorFlotante, certificados["buttonCertificadoTres"]);
    });

    certificadoButtonCuatro.addEventListener("click", function (e) {
        e.preventDefault();
        mostrarContenedorFlotante(contenedorFlotante, certificados["buttonCertificadoCuatro"]);
    });
});

function crearContenedorFlotante(id, imagenes) {
    var contenedorFlotante = document.createElement("div");
    contenedorFlotante.id = id;
    contenedorFlotante.className = "contenedorFlotante";
    contenedorFlotante.style.display = "none";

    var row = document.createElement("div");
    row.className = "row";
    row.id = "certificados";

    var imagenesContainer = document.createElement("div");
    imagenesContainer.className = "imagenesContainer";

    // Añadimos imágenes, por defecto vacío hasta que se seleccionen
    imagenes.forEach(function(imagen) {
        var img = document.createElement("img");
        img.className = "col-lg-6 imageCertificados";
        img.src = imagen;
        img.alt = "Certificado";
        imagenesContainer.appendChild(img);
    });

    row.appendChild(imagenesContainer);
    contenedorFlotante.appendChild(row);

    // Botón para cerrar el contenedor flotante
    var salirButton = document.createElement("button");
    salirButton.innerText = "Salir";
    salirButton.className = "salirButton";
    salirButton.addEventListener("click", function () {
        contenedorFlotante.style.display = "none";
    });

    contenedorFlotante.appendChild(salirButton);
    document.body.appendChild(contenedorFlotante);

    return contenedorFlotante;
}

function mostrarContenedorFlotante(contenedor, imagenes) {
    var imagenesContainer = contenedor.querySelector(".imagenesContainer");
    imagenesContainer.innerHTML = ""; // Limpiar imágenes anteriores

    // Si hay un solo certificado, ajusta la clase para centrarlo
    if (imagenes.length === 1) {
        var img = document.createElement("img");
        img.className = "imageCertificados centered"; // Añadir clase centrada
        img.src = imagenes[0];
        img.alt = "Certificado";
        imagenesContainer.appendChild(img);
    } else {
        // Si hay más de uno, se muestran distribuidos
        imagenes.forEach(function(imagen) {
            var img = document.createElement("img");
            img.className = "col-lg-6 imageCertificados";
            img.src = imagen;
            img.alt = "Certificado";
            imagenesContainer.appendChild(img);
        });
    }

    contenedor.style.display = "flex";
}

const form = document.getElementById('formularioContacto');
form.addEventListener('submit', validateAndSendEmail);

const serviceId = 'service_ry0w6qc';
const templateId = 'template_3q3ipum';
const apikey = '_HSqE6MiTPJ6B9o1U';

function validateAndSendEmail(event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
        emailjs.init(serviceId);

        emailjs.sendForm(serviceId, templateId, form, apikey)
            .then((resultado) => {
                Swal.fire('Su mensaje se ha enviado con éxito.');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No ha sido posible enviar el mensaje!',
                });
            });
    }

    form.classList.add('was-validated');
}

document.addEventListener('DOMContentLoaded', () => {
    var disclaimer = document.querySelector("img[alt='www.000webhost.com']");
    if (disclaimer) {
        disclaimer.remove();
    }
});