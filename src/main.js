  document.getElementById("indexContent").style.display = "block";
  document.getElementById("enterseasons").style.display = "none";

//Funcion seccion personajes
const enter = () => {
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "none";
};


  //document.querySelector('#dataCharacters').innerHTML = sortOrderAz;
//});

//let sortOrderZa=window.data.orderZa();
//document.getElementById("za").addEventListener("click", () => {
//let sortOrderZa=window.data.orderZa();
//document.querySelector('#dataCharacters').innerHTML = '';
//document.querySelector('#dataCharacters').innerHTML = sortOrderZa;});

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
  document.getElementById("data").style.display = "none";
      //imprime toda la data
    document.getElementById("az").addEventListener("click", () => {
    let sortOrderAz=window.data.orderAz();
    document.querySelector('#styleCards').innerHTML = '';
    sortOrderAz.forEach((id) => {
      let showAllCharacters= document.getElementById("styleCards");  
      let imageCharacters=document.createElement("IMG");
        imageCharacters.setAttribute("src",id.image);
       // imageCharacters.setAttribute("width","200");
        //imageCharacters.setAttribute("height","200");
        showAllCharacters.appendChild(imageCharacters);
        showAllCharacters.innerHTML +='<br>'+ id.name+'<br>'; 
        showAllCharacters.innerHTML +='Species: '+ id.species +'<br>'+'Gender: '+ id.gender +'<br>'+'Status: '+ id.status +'<br>'+'Type: '+ id.type +"<br>"; 
      });
    })

    document.getElementById("za").addEventListener("click", () => {
      let sortOrderZa=window.data.orderZa();
      document.querySelector('#styleCards').innerHTML = '';
      sortOrderZa.forEach((id) => {
        let showAllCharacters= document.getElementById("styleCards");  
        let imageCharacters=document.createElement("IMG");
          imageCharacters.setAttribute("src",id.image);
         // imageCharacters.setAttribute("width","200");
          //imageCharacters.setAttribute("height","200");
          showAllCharacters.appendChild(imageCharacters);
          showAllCharacters.innerHTML +='<br>'+ id.name+'<br>'; 
          showAllCharacters.innerHTML +='Species: '+ id.species +'<br>'+'Gender: '+ id.gender +'<br>'+'Status: '+ id.status +'<br>'+'Type: '+ id.type +"<br>"; 
        });
      })


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
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};

  document.getElementById("all").addEventListener("click", buttonSeason1);

//Muestra data de personajes boton2

const buttonSeason2 = () => {
  document.getElementById("order").style.display = "none";
  const fullData =window.data.filterAlive();
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

    

//AppendChild episodes
/*const episode2 =  document.getElementById("episode2");
//document.getElementById("styleCards")
//new list
const episodeList2 = ["Chapter 12", "Chapter 13", "Chapter 14", "Chapter 15", "Chapter 16", "Chapter 17", "Chapter 18", "Chapter 19", "Chapter 20", "Chapter 21"];
    for(let choose2 of episodeList2){
let listEpisodes2 = document.createElement("li");
    listEpisodes2.textContent = choose2;

    episode2.appendChild(listEpisodes2);
 }*/
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block"; 
};

  document.getElementById("alive").addEventListener("click", buttonSeason2);

//Muestra data de personajes boton3
const buttonSeason3 = () => {
  document.getElementById("order").style.display = "none";
  const fullData =window.data.filterDead();
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

  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "block";
};
  document.getElementById("dead").addEventListener("click", buttonSeason3);


  const buttonSeason4 = () => {
    document.getElementById("order").style.display = "none";
    const fullData =window.data.filterUnknown();
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
  
    document.getElementById("mainHeader").style.display = "block";
    document.getElementById("enterseasons").style.display = "block";
    document.getElementById("indexContent").style.display = "none";
    document.getElementById("dataCharacters").style.display = "block";
  };
    document.getElementById("unknown").addEventListener("click", buttonSeason4);


  