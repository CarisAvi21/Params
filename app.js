function encriptar(elemento){
    let palabra = document.getElementsByTagName("textarea")[0].value;
    //let palabraCodificada = encodeURIComponent(palabra);
    document.getElementById('resultado').innerHTML = palabraCodificada;
  }
  
  function desencriptar(elemento){
    let palabra =  document.getElementsByTagName('textarea')[0].value;
    let palabraDecodificada = decodeURIComponent(palabra);
    document.getElementById('resultado').innerHTML = palabraDecodificada;
  }
  