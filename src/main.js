  document.getElementById("indexContent").style.display = "block";
  document.getElementById("enterseasons").style.display = "none";

//Funcion seccion personajes
const enter = () => {
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "none";
  //imprime toda la data
  
  const fullData =window.data.allCharacters();
  fullData.forEach((id) => {
    let showAllCharacters= document.getElementById("styleCards");  
    let imageCharacters=document.createElement("IMG");
      imageCharacters.setAttribute("src",id.image);
     // imageCharacters.setAttribute("width","200");
      //imageCharacters.setAttribute("height","200");
      showAllCharacters.appendChild(imageCharacters);
      showAllCharacters.innerHTML +='<br>'+ id.name+'<br>'; 
      showAllCharacters.innerHTML +='Species: '+ id.species +'<br>'+'Gender: '+ id.gender +'<br>'+'Status: '+ id.status +'<br>'+'Type: '+ id.type +"<br>"; 
    });
};

//let sortOrderAz=window.data.orderAz();
//document.getElementById("az").addEventListener("click", sortOrderAz);

let sortOrderZa=window.data.orderZa();
document.getElementById("za").addEventListener("click", sortOrderZa);

//document.getElementById("az").addEventListener("click", () => {window.data.orderAz();});
//console.log(sortOrder);
  document.getElementById("go").addEventListener("click", enter);
  document.getElementById("goCharacters").addEventListener("click", enter);

//Funcion seccion index
const index = () => {
  document.getElementById("indexContent").style.display = "block";
  document.getElementById("enterseasons").style.display = "none";
};

  document.getElementById("goIndex").addEventListener("click", index);
  
//Muestra data de personajes boton1
const buttonSeason1 = () => {

//AppendChild episodes
const episode1 = document.getElementById("episode1");
//new list
const episodeList1 = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10", "Chapter 11"];
    for(let choose1 of episodeList1){
let listEpisodes1 = document.createElement("li");
  listEpisodes1.textContent = choose1;

  episode1.appendChild(listEpisodes1);
//=window.fullData;
 }

  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};

  document.getElementById("seasonOne").addEventListener("click", buttonSeason1);

//Muestra data de personajes boton2

const buttonSeason2 = () => {
  
//AppendChild episodes
const episode2 =  document.getElementById("episode2");
//document.getElementById("styleCards")
//new list
const episodeList2 = ["Chapter 12", "Chapter 13", "Chapter 14", "Chapter 15", "Chapter 16", "Chapter 17", "Chapter 18", "Chapter 19", "Chapter 20", "Chapter 21"];
    for(let choose2 of episodeList2){
let listEpisodes2 = document.createElement("li");
    listEpisodes2.textContent = choose2;

    episode2.appendChild(listEpisodes2);
 }
 
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};

  document.getElementById("seasonTwo").addEventListener("click", buttonSeason2);

//Muestra data de personajes boton3
const buttonSeason3 = () => {

//AppendChild episodes
const episode3 = document.getElementById("episode3");
//new list
const episodeList3 = ["Chapter 22", "Chapter 23", "Chapter 24", "Chapter 25", "Chapter 26", "Chapter 27", "Chapter 28", "Chapter 29", "Chapter 30", "Chapter 31"];
    for(let choose3 of episodeList3){
let listEpisodes3 = document.createElement("li");
    listEpisodes3.textContent = choose3;

    episode3.appendChild(listEpisodes3);
 }

  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};


  document.getElementById("seasonThree").addEventListener("click", buttonSeason3);

  