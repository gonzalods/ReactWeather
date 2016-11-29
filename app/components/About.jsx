var React = require('react');

var About = (props) => {
  return(
    <di>
      <h1 className="text-center">Acerca de</h1>
      <p>Esta es una aplicación del tiempo construida con React.
         Esto desarollandola como ejemplos de un curso de React.</p>
       <p>Algunas de las herramientas utilizadas son:</p>
       <ul>
         <li>
           <a href="https://facebook.github.io/react">React</a> - Este es el
             framework JavaScript utilizado.
         </li>
         <li>
           <a href="http://openweathermap.org">Open Weather Map</a> - Se ha
             utilizado Open Weather Map para la busqueda del tiempo por
              ciudades.
         </li>
       </ul>
    </di>
  )
};
module.exports = About;
