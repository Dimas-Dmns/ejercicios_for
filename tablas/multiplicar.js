
function generarTablas() {

    let contenedor = document.getElementById("contenedorTabla");

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
                <td>5 × ${i}</td>
                <td>${5 * i}</td>
            </tr>
        `;

    }

    contenido += `
            </tbody>

        </table>
    `;

    contenedor.innerHTML = contenido;

}

