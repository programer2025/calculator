const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            boton.classList.remove('bounce-anim');
            void boton.offsetWidth;
            boton.classList.add('bounce-anim');

            try {
                pantalla.textContent = eval(pantalla.textContent);
                pantalla.classList.remove('flash-anim');
                void pantalla.offsetWidth;
                pantalla.classList.add('flash-anim');
            } catch {
                pantalla.textContent = "ERROR";
                pantalla.classList.remove('shake-anim');
                void pantalla.offsetWidth;
                pantalla.classList.add('shake-anim');
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});