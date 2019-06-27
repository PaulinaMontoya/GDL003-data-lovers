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

//window.fullData = {
//episodes:() => {


  let fullData = RICKANDMORTY.results;

  fullData.forEach((id) => {
   console.log(id.name);
  });
  //return fullData
//};

