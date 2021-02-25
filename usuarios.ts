// @ts-ignore

import {Client} from "https://deno.land/x/mysql@v2.8.0/mod.ts"

const client = await new Client().connect({
    hostname: 'localhost', username: 'root', db: 'usuarios_typescript', password: '', port: 3306,
});
var MINIMO_CADENA_NOMBRE = 4;
var MINIMO_CADENA_APELLIDO = 4;
var CADENA_CELULAR = 10;
var MINIMO_CADENA_PASSWORD = 8;
var nombre = "";
var apellido = "";
var celular = "";
var email = "";
var password = "";

function obtenerNombre(MINIMO_CADENA_NOMBRE: number) {
    var bandera = 0;
    var validaLetras = 0;
    var validaExtension = 0;
    var nombre = "";
    try {
        while (bandera === 0) {
            var contadorNoLetras = 0;
            nombre = prompt("Ingrese nombre") as string;
            var cadena_nombre = nombre.length;
            var palabraPartida = nombre.split('');
            var i;
            for (i = 0; i < cadena_nombre; i++) {
                var codigoAcci = palabraPartida[i].charCodeAt(0);

                if (((codigoAcci < 65) || ((codigoAcci > 90) && codigoAcci < 97)) || (codigoAcci > 122)) {
                    contadorNoLetras++;
                }
            }
            if (contadorNoLetras === 0)
                validaLetras = 1;
            else {
                console.log("Debe ingresar únicamente letras, no números");
                validaLetras = 0;
            }


            if (cadena_nombre >= MINIMO_CADENA_NOMBRE)
                validaExtension = 1;
            else {
                console.log("Para nombre debe ingresar siempre más de 3 letras");
                validaExtension = 0;
            }

            if ((validaLetras === 1) && (validaExtension === 1))
                bandera = 1;
            else {
                bandera = 0;
            }

        }
    } catch {
    }
    return nombre;
}

function obtenerApellido(MINIMO_CADENA_APELLIDO: number) {
    var bandera = 0;
    var validaLetras = 0;
    var validaExtension = 0;
    var apellido = "";
    try {
        while (bandera === 0) {
            var contadorNoLetras = 0;
            apellido = prompt("Ingrese Apellido") as string;
            var cadena_apellido = apellido.length;
            var palabraPartida = apellido.split('');
            var i;
            for (i = 0; i < cadena_apellido; i++) {
                var codigoAcci = palabraPartida[i].charCodeAt(0);
                if (((codigoAcci < 65) || ((codigoAcci > 90) && codigoAcci < 97)) || (codigoAcci > 122)) {
                    contadorNoLetras++;
                }
            }
            if (contadorNoLetras === 0)
                validaLetras = 1;
            else {
                console.log("Debe ingresar únicamente letras, no números");
                validaLetras = 0;
            }

            if (cadena_apellido >= MINIMO_CADENA_APELLIDO)
                validaExtension = 1;
            else {
                console.log("Para apellido debe ingresar siempre más de 3 letras");
                validaExtension = 0;
            }

            if ((validaLetras === 1) && (validaExtension === 1))
                bandera = 1;
            else {
                bandera = 0;
            }

        }
    } catch {
    }
    return apellido;
}

function obtenerCelular(CADENA_CELULAR: number) {
    var bandera = 0;
    var celular = "";
    try {
        while (bandera === 0) {
            var contador = 0;
            var validaSoloNumeros = 0;
            var validaExtension = 0;
            var verificaNoNumero = 0;
            celular = prompt("Ingrese Celular") as string;
            var cadena_cel = celular.length;
            var palabraPartida = celular.split('');
            var i;
            for (i = 0; i < cadena_cel; i++) {
                var codigoAcci = palabraPartida[i].charCodeAt(0);
                if ((codigoAcci > 47) && (codigoAcci < 58))
                    contador++;
                else
                    verificaNoNumero++;
            }
            if (cadena_cel === CADENA_CELULAR)
                validaExtension = 1;
            else {
                console.log("CUIDADO!!! La extensión correcta son 10 dígitos");
                validaExtension = 0;
            }


            if (verificaNoNumero > 0)
                console.log("ALERTA!!! Ingresaste 1 o más letras, son sólo números");

            if (contador === CADENA_CELULAR)
                validaSoloNumeros = 1;
            else
                validaSoloNumeros = 0;

            if ((validaSoloNumeros === 1) && (validaExtension === 1))
                bandera = 1;
            else
                bandera = 0;

        }
    } catch {
    }
    return celular;
}

function obtenerEmail(MINIMO_CADENA_EMAIL: number) {
    var validaExtension = 0;
    var bandera = 0;
    var email = "";
    try {
        while (bandera === 0) {
            var validaArroba = 0;
            var validaPunto = 0;
            var contandoPuntos = 0;
            var ubicacionPunto = [];
            var contandoArrobas = 0;
            var ubicacionArroba = 0;

            email = prompt("Ingrese email") as string;
            var cadena_email = email.length;
            var palabraPartida = email.split('');
            var i;
            var j = 0;
            for (i = 0; i < cadena_email; i++) {
                var codigoAcci = palabraPartida[i].charCodeAt(0);
                if (codigoAcci === 64) {
                    contandoArrobas++;
                    ubicacionArroba = i;
                }

                if (codigoAcci === 46) {
                    contandoPuntos++;
                    ubicacionPunto[j] = i;
                    j++;
                }
            }

            if (cadena_email > MINIMO_CADENA_EMAIL)
                validaExtension = 1;
            else {
                console.log("Debe ingresar al menos 5 caracteres");
                validaExtension = 0;
            }

            if ((contandoPuntos === 0) || (ubicacionPunto[j] < ubicacionArroba))
                console.log("Debes ingresar al menos un punto después de arroba")

            if (contandoArrobas === 0)
                console.log("ALERTA!!! debes ingresar por lo menos una Arroba");

            if (contandoArrobas > 1)
                console.log("CUIDADO!!! No debes ingresar más de una arroba")

            if (contandoArrobas === 1)
                validaArroba = 1;
            else
                validaArroba = 0;

            if ((contandoPuntos > 0) && (ubicacionPunto[j - 1] > ubicacionArroba))
                validaPunto = 1;
            else
                validaPunto = 0;

            if ((validaArroba === 1) && (validaPunto === 1) && (validaExtension === 1))
                bandera = 1;
            else
                bandera = 0;
        }
    } catch {
    }
    return email;
}

function obtenerPassword(MINIMO_CADENA_PASSWORD: number) {
    var bandera = 0;
    var password = "";
    try {
        while (bandera === 0) {
            var validaCaracterEspecial = 0;
            var contadorCaracterEspecial = 0;
            var validaMayuscula = 0;
            var contadorMayuscula = 0;
            var validaExtension = 0;

            password = prompt("Ingrese password") as string;
            var cadena_password = password.length;
            var palabraPartida = password.split('');
            var i;
            for (i = 0; i < cadena_password; i++) {
                var codigoAcci = palabraPartida[i].charCodeAt(0);

                if ((codigoAcci >= 65) && (codigoAcci <= 90)) {
                    contadorMayuscula++;
                }

                if ((codigoAcci <= 47) || ((codigoAcci >= 58) && (codigoAcci <= 64)) || ((codigoAcci >= 91) && (codigoAcci <= 96)) || (codigoAcci >= 123)) {
                    contadorCaracterEspecial++;
                }
            }
            if (contadorMayuscula > 0)
                validaMayuscula = 1;
            else {
                console.log("Debe incluir por lo menos una letra MAYUSCULA");
                validaMayuscula = 0;
            }

            if (contadorCaracterEspecial > 0)
                validaCaracterEspecial = 1;
            else {
                console.log("Debe incluir por lo menos un caracter especial");
                validaCaracterEspecial = 0;
            }

            if (cadena_password >= 8)
                validaExtension = 1;
            else {
                console.log("La contraseña debe tener por lo menos 8 caracteres");
                validaExtension = 0;
            }

            if ((validaMayuscula === 1) && (validaCaracterEspecial === 1) && (validaExtension === 1))
                bandera = 1;
            else
                bandera = 0;

        }
    } catch {
    }

    return password;
}

function formulario() { //INICIO FORMULARIO
    var nombreNoNull = 0;
    var cadenaNombre = 0;
    while (nombreNoNull === 0) {
        try {
            nombre = obtenerNombre(MINIMO_CADENA_NOMBRE);
            cadenaNombre = nombre.length;
            if (cadenaNombre > 0)
                nombreNoNull++;
        } catch {
            console.log("No puede dejar el campo nombre vacío");
            nombreNoNull = 0;
        }
    }

    console.log("TU NOMBRE ES => " + nombre + " Su extensión es: " + cadenaNombre);

    var apellidoNotNull = 0;
    var cadenaApellido = 0;
    while (apellidoNotNull === 0) {
        try {
            apellido = obtenerApellido(MINIMO_CADENA_APELLIDO);
            cadenaApellido = apellido.length;
            if (cadenaApellido > 0)
                apellidoNotNull++;
        } catch {
            console.log("No puede dejar el campo apellido vacío");
            apellidoNotNull = 0;
        }
    }
    console.log("TU APELLIDO ES => " + apellido + " Su extensión es: " + cadenaApellido);

    celular = obtenerCelular(CADENA_CELULAR);
    console.log("TU CELULAR ES => " + celular);

    var emailNotNull = 0;
    var cadenaEmail = 0;
    while (emailNotNull === 0) {
        try {
            email = obtenerEmail(MINIMO_CADENA_APELLIDO);
            cadenaEmail = email.length;
            if (cadenaEmail > 0)
                emailNotNull++;
        } catch {
            console.log("No puede dejar el campo email");
            emailNotNull = 0;
        }
    }
    console.log("TU Email ES => " + email + "Su extensión es: " + cadenaEmail)

    var passwordNotNull = 0;
    var cadenaPassword = 0;
    while (passwordNotNull === 0) {
        try {
            password = obtenerPassword(MINIMO_CADENA_PASSWORD);
            cadenaPassword = password.length;
            if (cadenaPassword > 0)
                passwordNotNull++;
        } catch {
            console.log("No puede dejar el campo password");
            cadenaPassword = 0;
        }
    }
    console.log("TU FUE CONTRASEÑA FUE INGRESADA => " + password)

    var personas = [];
    personas = [
        {
            nombre,
            apellido,
            celular,
            email,
            password,
        }]
    return personas;

} //FIN FORMULARIO

//PRINCIPAL INICIO
var expresion = "";
while (expresion != '5') {
    console.log("\n\tCRUD USUARIOS");

    const buscando = await client.execute('SELECT * FROM usuarios');
    const cuentaFilas = await client.execute('SELECT COUNT(*) FROM usuarios');
    let cuentaUsuarios = JSON.stringify(cuentaFilas);
    console.log("CONTADOR USUARIOS: ", cuentaUsuarios[21]);

    if (cuentaUsuarios[21] === "0") {
        console.table("\n\tCAMPOS VACÍOS, NO APARECE NINGUNA TABLA PORQUE NO SE HA ALIMENTADO LA BASE\n\t DE DATOS O LA INFORMACIÓN EXISTENTE FUE ELIMINADA...  INTERACTÚE CON EL MENÚ\n")
    } else {
        if (cuentaUsuarios[21] != "0") {
            console.table(buscando.rows);
        }

    }
    var expresion = prompt("ELIJA UNA OPCIÓN:  INGRESAR[1]\t BORRAR[2]\t EDITAR[3]\t AYUDA[4]\t SALIR[5] \nDigite su opción aquí =>") as string;
    switch (expresion) {

        case "1":
            //INGRESAR
            var personas = [];
            personas = formulario();
            await client.execute("INSERT INTO usuarios(nombre, apellido, celular, email, password) VALUES('" + personas[0].nombre + "','" + personas[0].apellido + "','" + personas[0].celular + "','" + personas[0].email + "','" + personas[0].password + "')");
            break;
        case "2":
            //BORRAR
            let llave = parseInt(prompt("Ingrese la ID del usuario a BORRAR") as string);
            await client.execute("DELETE FROM usuarios WHERE id = " + llave + "");
            break;
        case "3":
            //EDITAR
            let clave = parseInt(prompt("Ingrese la ID del usuario a EDITAR") as string);
            console.log("AGREGUE LOS NUEVOS DATOS: ");
            var personasEditar = [];
            personasEditar = formulario();
            await client.execute("UPDATE usuarios SET nombre = '" + personasEditar[0].nombre + "', apellido= '" + personasEditar[0].apellido + "', celular = '" + personasEditar[0].celular + "', email='" + personasEditar[0].email + "', password='" + personasEditar[0].password + "' WHERE usuarios.id = '" + clave + "'");
            break;
        case "4":
            console.log("\n\nSólo digite la opción deseada para el ingreso, edición o eliminación de usuarios, en caso de que no aparezca ninguna tabla,\n es porque no se ha alimentado la Base de Datos, dele en la opción [1]  para comenzar con el cargue de información.\n No debe ingresar en nombre y apellido menos de 4 caracteres, tampoco agregue números\n todos los campos son obligatorios excepto el teléfono,  Si no digita los valores del menú no podrá realizar ninguna modificación \nen campo correo agregue máximo una ARROBA, la cual es obligatoria y en el campo password debe digitar mínimo 8 caracteres de los cuales al menos\n uno debe ser especial y uno letra mayúscula. Si no lo hace de acuerdo a lo indicado el sistema le notificará y validará para que se\n ingrese correctamente. Si desea más información consulte con los administradores. ");

            break;
        case "5":
            console.log("Saliendo del programa");
            break;
        default:
            console.log("Digite sólo los valores soliciitados");
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
    }
}//PRINCIPAL FIN

//deno run --allow-net usuarios.ts