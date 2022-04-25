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

            for (let item of Object.keys(datos)) {
                // console.log(item.nombre);
                res.innerHTML += `
                <tr>
                    <td>Intel-1</td>
                    <td>$650.000</td>
                    <td>Intel i3 9na Gen, Nvidia 1650, 16GB Ram, 1TB SSD</td>
                </tr>
                <tr>
                    <td>Ryzen-1</td>
                    <td>$700.000</td>
                    <td>Ryzen 5 5600x, Nvidia 1650, 16GB Ram, 512GB SSD</td>
                </tr>
                <tr>
                    <td>Intel-2</td>
                    <td>$950.000</td>
                    <td>Intel i7 10ma Gen, Nvidia 2060, 16GB Ram, 1TB SSD</td>
                </tr>
                <tr>
                    <td>Ryzen-2</td>
                    <td>$1.050.000</td>
                    <td>Ryzen 7 5800x, Nvidia 2060S, 16GB Ram, 1TB SSD</td>
                </tr>
                `
            }
        }
    }
}