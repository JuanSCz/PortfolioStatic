document.addEventListener('DOMContentLoaded', function () {
        // Alerta para botón Documentación de Analista de Sistemas (ORT Argentina)
        var buttonCertificadoUno = document.getElementById('buttonCertificadoUno');
        if (buttonCertificadoUno) {
            buttonCertificadoUno.setAttribute('title', 'Actualmente cursando la carrera');
            buttonCertificadoUno.style.cursor = 'pointer';
            buttonCertificadoUno.addEventListener('click', function (e) {
                e.preventDefault();
                Swal.fire({
                    icon: 'info',
                    title: 'Carrera en curso',
                    text: 'Actualmente me encuentro cursando la carrera de Analista de Sistemas en ORT Argentina. La documentación estará disponible una vez finalizada.',
                    background: '#181b22',
                    color: '#eaf6ff',
                    confirmButtonColor: '#007ced',
                    confirmButtonText: 'Cerrar',
                    customClass: {
                        popup: 'swal2-portfolio',
                        title: 'swal2-title-portfolio',
                        confirmButton: 'swal2-confirm-portfolio'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            });
        }
    var buttonCV = document.getElementById('buttonCV');
    if (buttonCV) {
        buttonCV.setAttribute('title', 'Funcionalidad desactivada');
        buttonCV.style.cursor = 'pointer';
        buttonCV.addEventListener('click', function (e) {
            e.preventDefault();
            Swal.fire({
                icon: 'info',
                title: 'Acceso denegado',
                text: 'Funcionalidad desactivada por el administrador de la página.',
                background: '#181b22',
                color: '#eaf6ff',
                confirmButtonColor: '#007ced',
                confirmButtonText: 'Cerrar',
                customClass: {
                    popup: 'swal2-portfolio',
                    title: 'swal2-title-portfolio',
                    confirmButton: 'swal2-confirm-portfolio'
                },
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        });
    }
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        if (window.bootstrap && bootstrap.Tooltip) {
            new bootstrap.Tooltip(tooltipTriggerEl);
        } else if (window.bootstrap && window.bootstrap.Tooltip) {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        }
    });
});

var header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 70);
});

const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.header-inner .navlist');

function openMenu() {
    menu.classList.add('bx-x');
    navlist.classList.add('open');
    menu.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
}

function closeMenu() {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
}

function toggleMenu() {
    if (navlist.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
}

menu.onclick = toggleMenu;
menu.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed("#typed-output", {
        strings: ["Desarrollo de Software"],
        typeSpeed: 70,
        backSpeed: 55,
        backDelay: 1500,
        startDelay: 300,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|'
    });

    var links = document.querySelectorAll('header a');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (this.hash && this.hash.startsWith('#')) {
                e.preventDefault();
                var targetId = this.hash.substring(1);
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    if (targetId === 'header') {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else {
                        var header = document.querySelector('header');
                        var headerHeight = header.offsetHeight;
                        var rect = targetElement.getBoundingClientRect();
                        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        var targetPosition = rect.top + scrollTop - headerHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
                closeMenu();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var certificados = {
        // "buttonCertificadoUno": ["images/fullStackEgg.png"], // Eliminado
        "buttonCertificadoDos": ["images/CertificadoArgPro1.png", "images/CertificadoArgPro2.png"],
        "buttonCertificadoTres": ["images/CertificadoCaC.png"],
        "buttonCertificadoCuatro": ["images/CertificadoUdemy.jpg"]
    };

    var contenedorFlotante = crearContenedorFlotante("contenedorFlotante", []);

    var certificadoButtonDos = document.getElementById("buttonCertificadoDos");
    var certificadoButtonTres = document.getElementById("buttonCertificadoTres");
    var certificadoButtonCuatro = document.getElementById("buttonCertificadoCuatro");

    if (certificadoButtonDos) {
        certificadoButtonDos.addEventListener("click", function (e) {
            e.preventDefault();
            mostrarContenedorFlotante(contenedorFlotante, certificados["buttonCertificadoDos"]);
        });
    }
    if (certificadoButtonTres) {
        certificadoButtonTres.addEventListener("click", function (e) {
            e.preventDefault();
            mostrarContenedorFlotante(contenedorFlotante, certificados["buttonCertificadoTres"]);
        });
    }
    if (certificadoButtonCuatro) {
        certificadoButtonCuatro.addEventListener("click", function (e) {
            e.preventDefault();
            mostrarContenedorFlotante(contenedorFlotante, certificados["buttonCertificadoCuatro"]);
        });
    }
});

function crearContenedorFlotante(id, imagenes) {
    var contenedorFlotante = document.createElement("div");
    contenedorFlotante.id = id;
    contenedorFlotante.className = "contenedorFlotante card-estudios-modern shadow rounded-4";
    contenedorFlotante.style.animation = "fadeInCertOnly 0.28s ease";
    contenedorFlotante.style.display = "none";

    var row = document.createElement("div");
    row.className = "row";
    row.id = "certificados";

    var imagenesContainer = document.createElement("div");
    imagenesContainer.className = "imagenesContainer";

    imagenes.forEach(function (imagen) {
        var img = document.createElement("img");
        img.className = "col-lg-6 imageCertificados";
        img.src = imagen;
        img.alt = "Certificado";
        img.loading = "lazy";
        imagenesContainer.appendChild(img);
    });

    row.appendChild(imagenesContainer);
    contenedorFlotante.appendChild(row);

    var salirButton = document.createElement("button");
    salirButton.textContent = 'Salir';
    salirButton.className = "buttonCertificadoSalir";
    salirButton.style.margin = "1.2rem auto 0 auto";
    salirButton.addEventListener("click", function () {
        contenedorFlotante.style.display = "none";
    });

    contenedorFlotante.appendChild(salirButton);
    document.body.appendChild(contenedorFlotante);

    return contenedorFlotante;
}

function mostrarContenedorFlotante(contenedor, imagenes) {
    var imagenesContainer = contenedor.querySelector(".imagenesContainer");
    imagenesContainer.innerHTML = "";

    if (imagenes.length === 1) {
        var img = document.createElement("img");
        img.className = "imageCertificados centered";
        img.src = imagenes[0];
        img.alt = "Certificado";
        img.loading = "lazy";
        imagenesContainer.appendChild(img);
    } else {
        imagenes.forEach(function (imagen) {
            var img = document.createElement("img");
            img.className = "col-lg-6 imageCertificados";
            img.src = imagen;
            img.alt = "Certificado";
            img.loading = "lazy";
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
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Tu mensaje fue enviado correctamente. ¡Gracias por contactarme!',
                    background: '#181b22',
                    color: '#eaf6ff',
                    confirmButtonColor: '#007ced',
                    confirmButtonText: 'Cerrar',
                    customClass: {
                        popup: 'swal2-portfolio',
                        title: 'swal2-title-portfolio',
                        confirmButton: 'swal2-confirm-portfolio'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                form.reset();
                form.classList.remove('was-validated');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'No ha sido posible enviar el mensaje. Intenta nuevamente más tarde.',
                    background: '#181b22',
                    color: '#eaf6ff',
                    confirmButtonColor: '#007ced',
                    confirmButtonText: 'Cerrar',
                    customClass: {
                        popup: 'swal2-portfolio',
                        title: 'swal2-title-portfolio',
                        confirmButton: 'swal2-confirm-portfolio'
                    },
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
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

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    const skillBoxes = document.querySelectorAll('.services .box');
    skillBoxes.forEach(box => {
        box.style.animationPlayState = 'paused';
        observer.observe(box);
    });

    const estudiosCards = document.querySelectorAll('.estudios .card-estudios-modern');
    estudiosCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });

    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    portfolioBoxes.forEach(box => {
        box.style.animationPlayState = 'paused';
        observer.observe(box);
    });
});