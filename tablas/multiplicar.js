
function generarTablas() {

    let contenedor =
        document.getElementById("contenedorTabla");

    let numero =
        document.getElementById("txtNumero").value;

    let contenido = "";

    contenido += `
        <table>

            <thead>

                <tr>
                    <th>OPERACIÓN</th>
                    <th>RESULTADO</th>
                </tr>

            </thead>

            <tbody>
    `;


    for (let i = 1; i <= 10; i++) {

        contenido += `
            <tr>
                <td>${numero} × ${i}</td>
                <td>${numero * i}</td>
            </tr>
        `;

    }


    contenido += `
            </tbody>

        </table>
    `;


    contenedor.innerHTML = contenido;

}
