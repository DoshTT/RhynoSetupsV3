/* VALIDACION CON JQUERY REGISTRO */
//Validacion campos de registro
jQuery.validator.addMethod("customEmail", function(value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Ingrese un correo válido ");
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
                nombres: {
                    required: 'Por favor ingrese su nombre!'
                },
                apellidos: {
                    required: 'Por favor ingrese su apellido'
                },
                correo: {
                    required: 'Por favor ingrese su correo',

                },
                password: {
                    required: 'Por favor ingrese una contraseña'
                },
                confirm: {
                    required: 'Por favor reingrese la contraseña',
                    equalTo: 'Ingrese la misma contraseña que escribió arriba '

                }
            }

        })
        //Validacion Checkbox
    $(function() {
        $("#btn").click(function() {
            //Reference the Group of CheckBoxes and verify whether at-least one CheckBox is checked.
            var checked = $("#registration input[type=checkbox]:checked").length;

            //Set the Valid Flag to True if at-least one CheckBox is checked.
            var isValid = checked > 0;

            //Display error message if no CheckBox is checked.
            $("#spnError")[0].style.display = isValid ? "none" : "block";
        });
    });


    $('#btn').click(function() {
        $("#registration").validate();
    });


});
/* VALIDACION CON JQUERY INICIO SESION */
$(document).ready(function() {
    $("#inicio-sesion").validate({
        rules: {
            correo1: {
                required: true,
                customEmail: true
            },

            password1: {
                required: true
            },
        },

        messages: {
            correo1: {
                required: 'Por favor ingrese su correo',

            },
            password1: {
                required: 'Por favor ingrese una contraseña'
            },
        }

    })
    $('#btn2').click(function() {
        $("#inicio-sesion").validate();
    });
});