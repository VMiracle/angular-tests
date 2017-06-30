// Este archivo indica el punto de inico de la ejecucion de la logica del sitio

// Configuracion del sitio como una aplicacion de AngularJS
angular
  // Indicamos el nombre de la aplicacion e importamos el modulo de 
  // enrutamiento de URLs
  .module('INSERTE EL NOMBRE DEL PROYECTO AQUI', ['ui.router'])

  // Configuramos nuestras constantes globales
  .constant('dir', new Directory())

  // Configuramos los servicios globales del sitio
  // .service('NombreDelServicio', NombreDeLaClase)

  // Declaramos los controladores de cada pagina del sitio
  // .controller('NombreDelControlador', NombreDeLaClase)

  // Configuramos el enrutamiento y navegacion de las varias paginas del sitio
  .config(function($stateProvider, $urlRouterProvider, dir) {
    // Declaramos los diferentes estados (paginas) que incluye nuestro sitio
    // e indicamos cuales son las vistas y los controladores que le 
    // corresponden a cada uno
    // $stateProvider
    //   .state('nombre-del-estado', {
    //     url: '/url/que/aparecera/en/el/navegador',
    //     templateUrl: dir.layouts + 'nombre-de-la-vista.html',
    //     controller: 'NombreDelControlador'
    //   })

    // Declaramos cual sera la pagina que se desplegara por defecto cuando se 
    // intente navegar a una pagina que no haya sido declarada
    // $urlRouterProvider
    //   .otherwise('nombre-del-estado')
})
