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
      let sortAz = names.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
          if (a.name > b.name) {
        return 1;
          } else {
        return 0;
          }
      });
      return sortAz;
    },
    orderZa:() =>{
      let names = RICKANDMORTY.results;
     let sortZa = names.reverse((a, b) => {
        if (a.name < b.name) {
          return -1;
        }  
        if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return sortZa;
    },
    filterAlive: () => {
      let alive = RICKANDMORTY.results;
      const statusAlive = alive.filter(filterAlive => (filterAlive.status == "Alive"));
      return statusAlive;
    },
    filterDead: () => {
      let dead = RICKANDMORTY.results;
      const statusDead = dead.filter(filterDead => (filterDead.status == "Dead"));
      return statusDead;
    },
    filterUnknown: () => {
      let unknown = RICKANDMORTY.results;
      const statusUnknown = unknown.filter(filterUnknown => (filterUnknown.status == "unknown"));
      return statusUnknown;
    }

};//Aqui termina window.data
 
