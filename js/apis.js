//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'buildss.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            //console.log(this.responseText);

            let datos = JSON.parse(this.responseText);

            //console.log(datos);

            let res = document.querySelector('#res');

            res.innerHTML = '';

            for (let item of builds) {
                // console.log(item.nombre);
                res.innerHTML += `
                    <tr>
                        <td>${item.nombre}</td>
                        <td>${item.precio}</td>
                        <td>${item.carac}</td>
                    </tr>


                `
            }
        }
    }
}