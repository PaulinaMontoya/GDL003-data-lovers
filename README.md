
# Definición del producto
Es una página web donde se muestra la información de todos los personajes que aparecen en la serie de Rick and Morty.

## ¿Qué problema resuelve?
Los fans de la serie o aquellas personas que la han comenzado a ver podrán acceder a una base de datos que les mostrará todos los personajes y también podran filtrarla según el estatus del personaje (vivo, muerto o no se sabe). Tendrán la comodidad de acceder al sitio desde cualquier dispositivo para visualizar la información de manera amigable ya que está diseñada de manera responsiva.

# Historia de usuario 1
## Rol del usuario.
Sofia como nueva fan de la serie de Rick and Morty le gustaría una plataforma con la que pueda acceder desde su celular para conocer a todos los personajes que aparecen en la serie y así estar más actualizada con sus amigos que ya son fans desde hace tiempo.

## Objetivo.
Podra acceder desde el menú principal en el botón llamado **Characters** o desde el botón que esta abajo de la introducción llamado **Go to see them**, los cuales la llevarán a la sección donde accederá a la información de todos los personajes de la serie desde el botón **All Characters**, podrá ordenar la data alfabeticamente dándole click en los botones **A-Z** o **Z-A** y aparecerá el total de los personajes.

## Beneficio.
Cuando ingrese a la página desde su celular podrá tener acceso a una data completa con todos los personajes de la serie y visualizará la imagen, nombre, especie, género, estatus (vivos, muertos o desconocido) y tipo. Y podrá ordenarla alfabéticamente para tener una búsqueda más rápida.

# Historia de usuario 2
## Rol del usuario.
Alejandra como fan de la serie de Rick and Morty le gustaría una plataforma para saber el estatus de los personajes y saber si están vivos, muertos o no se sabe para seguir la secuencia de la serie.

## Objetivo.
En el botón que aparece en el menú llamado **Characters** o desde el botón que está abajo de la introducción llamado **Go to see them** podrá acceder a la sección donde se encuentran filtrados los personajes según su estatus: **Alive**, **Dead** o **Unknown**.

## Beneficio.
Cuando seleccione el estatus de los personajes podrá visualizar la imagen, nombre, especie, género y tipo. También sabrá el total que han muerto, siguen vivos o no se sabe de su estatus.

# Diseño de la interfaz
## Prototipos de baja fidelidad
Estos son nuestros primeros bocetos de interfaces, los cuales fueron cambiando según las primeras encuestas que hicimos a los usuarios.

Boceto 1
![Prototipo-de-baja-fidelidad](https://i.ibb.co/q0S4f9W/Imagen-de-i-OS-1.jpg)
Boceto 2
![Prototipo-de-baja-fidelidad](https://i.ibb.co/9wHjBP0/Imagen-de-i-OS-2.jpg)
Boceto 3
![Prototipo-de-baja-fidelidad](https://i.ibb.co/6gSgxyH/Imagen-de-i-OS.jpg)

## Prototipo de alta fidelidad
Nuestra propuesta de producto se muestra en el siguiente enlace y es nuestro prototipo de alta fidelidad con el que hicimos encuestas, éstas encuestas nos ayudaron a tomar decisiones en los cambios que hicimos de contenido y diseño para mejorar la experiencia de usuario. En la esquina inferior izquierda existe un boton para visualizar los comentarios que nos dejaron algunos usuarios.

[Prototipo de alta fidelidad](https://marvelapp.com/75djbgj/screen/58440707)

## Pruebas unitarias
Escribimos las pruebas unitarias que aparecen en el archivo llamado **data.spec.js** para las funciones encargadas de procesar: filtrado (**Alive**, **Dead** o **Unknown**), ordenar la data (**A-Z** o **Z-A**) y al calcular las estadísticas (Aparece cuando se muestra el número de personajes que hay por filtro).