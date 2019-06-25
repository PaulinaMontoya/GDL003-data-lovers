

  document.getElementById("indexContent").style.display = "block";
  document.getElementById("enterseasons").style.display = "none";

//Funcion seccion personajes
const enter = () => {
  document.getElementById("mainHeader").style.display = "block";
  document.getElementById("enterseasons").style.display = "block";
  document.getElementById("indexContent").style.display = "none";
  document.getElementById("dataCharacters").style.display = "none";
 };

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
    document.getElementById("mainHeader").style.display = "block";
    document.getElementById("enterseasons").style.display = "block";
    document.getElementById("indexContent").style.display = "none";
    document.getElementById("dataCharacters").style.display = "block";
   };

  document.getElementById("seasonOne").addEventListener("click", buttonSeason1);

  //Muestra data de personajes boton2
    const buttonSeason2 = () => {
      document.getElementById("mainHeader").style.display = "block";
      document.getElementById("enterseasons").style.display = "block";
      document.getElementById("indexContent").style.display = "none";
      document.getElementById("dataCharacters").style.display = "block";
     };

    document.getElementById("seasonTwo").addEventListener("click", buttonSeason2);

    //Muestra data de personajes boton3
      const buttonSeason3 = () => {
        document.getElementById("mainHeader").style.display = "block";
        document.getElementById("enterseasons").style.display = "block";
        document.getElementById("indexContent").style.display = "none";
        document.getElementById("dataCharacters").style.display = "block";
       };

      document.getElementById("seasonThree").addEventListener("click", buttonSeason3);
