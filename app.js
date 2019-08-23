function desencriptar(e){
  let word =  document.getElementsByTagName('textarea')[0].value;
  let decodeWord = decodeURIComponent(word.split("\\%\\$\\|\\&\\."));

  // document.write(decodeWord + "<br>" + "<br>");
  // let expReg = 'space';
  let word2 = decodeWord.split(['&']);
  console.log(decodeWord.split(['&']));
  
  //n document.write('<br>Params ' + word2.length  + ' elements: ');

   for(let decodeWord = 0; decodeWord < word2.length; decodeWord ++) {
    document.write('Data ' + decodeWord + ' is: ' + word2[decodeWord] + '<br>');
     //console.log(decode);
     
     
   // document.getElementById('result').innerHTML = decode;
   // console.log(document.getElementById('result').innerHTML = decode);
   
   }


  // document.write(word2 + '<br>');

     //document.getElementById('result').innerHTML = word2;
      
  
   // document.getElementById('result').innerHTML = result;
}
  