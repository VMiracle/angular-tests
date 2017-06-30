// Esta clase contiene una coleccion de URLs que apuntan a carpetas de interes
// del sitio para su facil manejo en el codigo de otros controladores
class Directory
{
  // Crea una nueva instancia de la clase de directorio
  constructor() {
    // creamos los URLs y los almacenamos en atributos publicos
    this.root = '../'
    this.lib = this.root + 'node_modules/'
    this.behaviors = this.root + 'behaviors/'
    this.layouts = this.root + 'layouts/'
    this.resources = this.root + 'resources'
  }
}