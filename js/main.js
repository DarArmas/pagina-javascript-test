$(document).ready(function () {
//esto solo se tiene que hacer cuando esté en index.html

if (window.location.href.indexOf('index') > -1) {

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });
}



//que solo se ejecute cuando estemeos en el index
if (window.location.href.indexOf('index') > -1) {
    var posts = [
    {
        title: 'Prueba de titulo 1',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nulla in magna euismod eleifend eu vitae purus. Vivamus placerat augue vel sapien aliquam imperdiet. In ac lacinia quam. Duis finibus dui vel luctus porttitor. Mauris justo ipsum, accumsan sed quam id, aliquet tincidunt eros. Cras ac purus porttitor, vestibulum sapien quis, porttitor ipsum. Morbi maximus tellus nec neque vulputate, ultrices suscipit orci tristique. Nullam sagittis rhoncus risus a commodo. Morbi eu urna ipsum. Praesent finibus at odio et consequat.',
    },
    {
        title: 'Prueba de titulo 2',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nulla in magna euismod eleifend eu vitae purus. Vivamus placerat augue vel sapien aliquam imperdiet. In ac lacinia quam. Duis finibus dui vel luctus porttitor. Mauris justo ipsum, accumsan sed quam id, aliquet tincidunt eros. Cras ac purus porttitor, vestibulum sapien quis, porttitor ipsum. Morbi maximus tellus nec neque vulputate, ultrices suscipit orci tristique. Nullam sagittis rhoncus risus a commodo. Morbi eu urna ipsum. Praesent finibus at odio et consequat.',
    },
    {
        title: 'Prueba de titulo 3',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nulla in magna euismod eleifend eu vitae purus. Vivamus placerat augue vel sapien aliquam imperdiet. In ac lacinia quam. Duis finibus dui vel luctus porttitor. Mauris justo ipsum, accumsan sed quam id, aliquet tincidunt eros. Cras ac purus porttitor, vestibulum sapien quis, porttitor ipsum. Morbi maximus tellus nec neque vulputate, ultrices suscipit orci tristique. Nullam sagittis rhoncus risus a commodo. Morbi eu urna ipsum. Praesent finibus at odio et consequat.',
    },
    {
        title: 'Prueba de titulo 4',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nulla in magna euismod eleifend eu vitae purus. Vivamus placerat augue vel sapien aliquam imperdiet. In ac lacinia quam. Duis finibus dui vel luctus porttitor. Mauris justo ipsum, accumsan sed quam id, aliquet tincidunt eros. Cras ac purus porttitor, vestibulum sapien quis, porttitor ipsum. Morbi maximus tellus nec neque vulputate, ultrices suscipit orci tristique. Nullam sagittis rhoncus risus a commodo. Morbi eu urna ipsum. Praesent finibus at odio et consequat.',
    },
    {
        title: 'Prueba de titulo 5',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nulla in magna euismod eleifend eu vitae purus. Vivamus placerat augue vel sapien aliquam imperdiet. In ac lacinia quam. Duis finibus dui vel luctus porttitor. Mauris justo ipsum, accumsan sed quam id, aliquet tincidunt eros. Cras ac purus porttitor, vestibulum sapien quis, porttitor ipsum. Morbi maximus tellus nec neque vulputate, ultrices suscipit orci tristique. Nullam sagittis rhoncus risus a commodo. Morbi eu urna ipsum. Praesent finibus at odio et consequat.',
    },
    {
        title: 'Prueba de titulo 5',
        date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id nulla in magna euismod eleifend eu vitae purus. Vivamus placerat augue vel sapien aliquam imperdiet. In ac lacinia quam. Duis finibus dui vel luctus porttitor. Mauris justo ipsum, accumsan sed quam id, aliquet tincidunt eros. Cras ac purus porttitor, vestibulum sapien quis, porttitor ipsum. Morbi maximus tellus nec neque vulputate, ultrices suscipit orci tristique. Nullam sagittis rhoncus risus a commodo. Morbi eu urna ipsum. Praesent finibus at odio et consequat.',
    },
    ];
        //creame un trozo htlml por cada elemento del json (cada post)
        posts.forEach((item, index) => {
            var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
            ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
            </article>

            `;
            $("#posts").append(post);
        });
    }
//Selector de tema
var theme = $("#theme");
var color = localStorage.getItem("color");
if (color == null) {
    color = "css/green.css";
}

theme.attr("href", color);
$("#to-green").click(function () {
    let color = "css/green.css";
    theme.attr("href", color);
        localStorage.setItem('color', color); //para recordar el color en la sesion
    });
$("#to-blue").click(function () {
    let color = "css/blue.css";
    theme.attr("href", color);
    localStorage.setItem('color', color);
});
$("#to-red").click(function () {
    let color = "css/red.css";
    theme.attr("href", color);
    localStorage.setItem('color', color);
});
    //scroll ariba de la web
    $('.subir').click(function (e) {
        e.preventDefault(); //para que el <a> no me quiera redirigir

        $('html, body').animate({
            scrollTop: 0
        });
        return false;
    });
    //login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        alert("YA LO MANDASTE PAPITO");
        localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");
//solo si está la sesion iniciada
if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido " + form_name + "</strong>"); //quiero reemplazar por eso no uso append
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>"); //solo cuando esté con sesion existirá IMPORTANTE EL ID

        $("#login").hide();
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

//el acordeon solo cuando esté en about.html
if (window.location.href.indexOf('about') > -1) {
    $("#acordeon").accordion();
}

//Reloj (solo cuando esté en reloj.html
if (window.location.href.indexOf('reloj') > -1) {

//intervalo a cada segundo actualiza el reloj
setInterval(function () {
    var reloj = moment().format("hh:mm:ss");
    $("#reloj").html(reloj);
}, 1000);
}

     //Validacion, solo cuando estoy en contacto
     if (window.location.href.indexOf('contact') > -1) {

            //añadir datepicker
            $("form input[name='date']").datepicker({
                dateFormat: 'dd-mm-yy'
            });

        //metodo para validar (plugin de jQuery)  
        $.validate({
            //JSON con configuraciones
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }


});

