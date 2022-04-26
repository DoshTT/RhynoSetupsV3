/* VALIDACION CON JQUERY REGISTRO E INICIO DE SESION*/
jQuery.validator.addMethod("customEmail", function(value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Please enter valid email address!");
$(document).ready(function() {
    $("#registration").validate({
        rules: {
            nombres: {
                required: true
            },

            apellidos: {
                required: true
            },

            correo: {
                required: true,
                customEmail: true
            },

            password: {
                required: true
            },
            confirm: {
                required: true,
                equalTo: '#password'
            }
        },

        messages: {
            nombres: "Por favor ingrese su nombre"

        },
    })


    $('#btn').click(function() {
        $("#registration").validate();
    });
});