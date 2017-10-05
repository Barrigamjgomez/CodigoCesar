var validaTexto = /^[a-zA-Z]*$/; // Está es una variable para saber que solo es texto


function Principal (rspta){ //Está función es la que ingresa los datos del cifrado

    do { //para preguntar al usuario más de una pregunta hacemos un bucle do...while, se ejecuta hasta que se agrege un falso
      
      var rspta = promt ("¡Bienvenido! Para cifrar su Palabra, Introduzca 1 y Para Decifrar introduzca 2.");
      if (rspta!="";){ //para validar que no haya espacio
        //si la respuesta es 1, ejecuta cipher
        if (rspta=="1"){
           cipher ()
        //si la respuesta es 2, ejecuta decipher
          }else if (rspta == "2") {
         
           decipher ()
         
          }else {
           alert ("DEBE INGRESAR SOLO LETRAS, SIN NUMEROS, NI ESPACIOS")
          }
      }
    while(rspta !="" || rspta !="1" && rspta !="2")

    }
principal(); // está función ejecutar el bucle

//funcion para cifrar texto
function cipher(txt){  

    do{
        //se pide nuevamente con otro prompt, ahora el texto a cifrar
        txt = prompt("Ingrese el texto a cifrar");

        //aqui se ocupa un if para validar que no se a ingresado datos incorrectos
        if(txt === "" || txt.search(validaTexto)){
            alert("no puede ingresar numeros,ni campos vacios");
            continue;
        }
        var ascii = [];//en éste arreglo vacio se guarda el codigo

        var cipherString = [];//arreglo vacio para guardar el string 

        //Esté for recorre el texto cifrado por .lenght
        for(var i=0; i<txt.length; i++){
            
            
            if(txt[i] === txt[i].toUpperCase()){
                //obtengo el codigo ascii y lo pongo en un arreglo "ascii"--A-Z
                ascii.push((txt.charCodeAt(i)-65+33)%26+65);
            }else if(txt[i] === txt[i].toLowerCase()){
                //obtengo el codigo ascii y lo pongo en un arreglo "ascii"--a-z
                ascii.push((txt.charCodeAt(i)-97+33)%26+97);
            }
        }

        //recorro el cifrado cesar con for y .lenght
        for(var j=0; j<ascii.length; j++){

            //transformo a letra lo obtenido en el for anterior y lo meto en otro arreglo "cipherString"
            cipherString.push(String.fromCharCode(ascii[j]));
        }
        
        document.write("el cifrado de "+ txt +" es: "+ cipherString.join(""));//lo muestro en pantalla el texto original y el cifrado

        return alert(cipherString.join(""));//retorna en un alert el texto cifrado

    }while(txt =="" || txt.search(validaTexto));//mientras el string no este vacio y encuentre numeros en el string.
    
}
//funcion para decifrar el texto
function decipher(cifrado){
        do{
            //se pide el texto a decifrar
            txt = prompt("Ingrese el texto a decifrar");

            //valido si la cadena ingresada es un campo vacio o si contiene numeros.
            if(txt === "" || txt.search(validaTexto)){
                alert("no puede ingresar ni numeros ni campos vacios");
                continue;
            }
            
            var ascii = [];//arreglo vacio para guardar el codigo ascii

            var deciphertxt = [];//arreglo vacio para guardar el nuevo string decifrado

            //primer for para recorrer el texto ingresado
            for(var i=0; i<txt.length; i++){

                //realizo un if para saber si el caracter es minuscula o mayuscula.
                if(txt[i] === txt[i].toUpperCase()){

                    //obtengo el codigo ascii y lo pongo en un arreglo "ascii"--Z-A
                    ascii.push((txt.charCodeAt(i)-90-33)%26+90);

                }else if(txt[i] === txt[i].toLowerCase()){
                    //obtengo el codigo ascii y lo pongo en un arreglo "ascii"--z-a
                    ascii.push((txt.charCodeAt(i)-122-33)%26+122);
                }
            }
            //recorro el arreglo "ascii"
            for(var j=0; j<ascii.length; j++){

                //transformo a letra lo obtenido en el for anterior y lo meto en otro arreglo "decipherString"
                decipherString.push(String.fromCharCode(ascii[j]));
            }
            
            document.write("el decifrado de "+ txt +" es: "+ decipherString.join(""));//muestra el texto cifrado y el decifrado en la pagina

            return alert(decipherString.join(""));//retorna en un alert el texto decifrado
            

    }while(txt =="" || txt.search(validaTexto));//mientras el string no este vacio y encuentre numeros en el string.    
}

