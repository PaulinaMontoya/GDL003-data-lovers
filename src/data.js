// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

const filtrado = () => {
  return 'filtrado';
};*/

/*window.example = {
  example,
  filtrado
};
*/
  
 window.data = {
 
   allCharacters:() => {
    fullData = RICKANDMORTY.results;
      return fullData;
      },
      orderAz:() =>{
      let names = RICKANDMORTY.results;
      names.sort((a, b) => {
        if (a.name < b.name) 
          return -1;
          if (a.name > b.name)
        return 1;
        return 0;
      })
    },
    orderZa:() =>{
      let names = RICKANDMORTY.results;
      names.reverse((a, b) => {
        if (a.name < b.name) 
          return -1;
        if (a.name > b.name)
        return 1;
        return 0;
      })
    }
};//Aqui termina window.data
 
