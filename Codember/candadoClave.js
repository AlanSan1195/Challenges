

// Tratamos de buscar una clave de un candado cuya clave la podemos obtener mediante algunas pistas
// las pistas estan conformadas por un array de carateres donde supuestamente cada carater signfica que hacer


function foundKey ( clave, intrsuction){
    // instruction
    let position = 0;
    for( let i = 0; i < intrsuction.length; i++){
      if(intrsuction[i] === 'U'){clave[position] = (clave[position] + 1 ) % 10 } // +1
      if (intrsuction[i]=== 'R'){position = (position + 1 ) % clave.length} // derecha
      if( intrsuction[i] === 'L'){ position = (position - 1 + clave.length ) % clave.length} // izquierda
      if( intrsuction[i] === 'D'){clave[position] = (clave[position] - 1 + 10)% 10 } //
    }
    return clave
  
  }
  
  
  
  let clave = [5,2,8,9,3,4,7,1,2,8,3,4]
  let intrsuction = 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR'
  console.log(foundKey(clave, intrsuction))
  
  
  