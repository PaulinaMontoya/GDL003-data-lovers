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
 
   allCharacters:(data) => {
    //fullData = RICKANDMORTY.results;
      return data;
      },

      orderAz:(data) =>{
      //let names = RICKANDMORTY.results;
      let sortAz = data.sort((a, b) => {
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
    orderZa:(data) =>{
     // let names = RICKANDMORTY.results;
     let sortZa = data.sort((b, a) => {
        if (a.name > b.name) {
          return 1;
        }  
        if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortZa;
    },
    filterAlive: (data) => {
      //let alive = RICKANDMORTY.results;
      const statusAlive = data.filter(filterAlive => (filterAlive.status == "Alive"));
      return statusAlive;
    },
    filterDead: (data) => {
      //let dead = RICKANDMORTY.results;
      const statusDead = data.filter(filterDead => (filterDead.status == "Dead"));
      return statusDead;
    },
    filterUnknown: (data) => {
     // let unknown = RICKANDMORTY.results;
      const statusUnknown = data.filter(filterUnknown => (filterUnknown.status == "unknown"));
      return statusUnknown;
    },
    computeStatsAlive:(data) =>{
    //let data = RICKANDMORTY.results;
    const statsAlive = data.filter(filterAlive => (filterAlive.status == "Alive"));
      return statsAlive.length;
    },
    computeStatsDead:(data) =>{
      //let data = RICKANDMORTY.results;
      const statsDead = data.filter(filterDead => (filterDead.status == "Dead"));
        return statsDead.length;
      },
    computeStatsUnknown:(data) =>{
      //let data = RICKANDMORTY.results;
      const statsUnknown = data.filter(filterUnknown => (filterUnknown.status == "unknown"));
        return statsUnknown.length;
      },
};//Aqui termina window.data
 
