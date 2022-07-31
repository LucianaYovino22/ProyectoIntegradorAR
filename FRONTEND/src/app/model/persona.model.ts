export class persona {

    //con el id? declaro que no es necesario inicializarlo ya que sera autoincremental.
id?: number;
nombre: String;
apellido: String;
titulo: String;
descripcion: String;
imagen: String;

constructor(nombre: String, apellido: String, titulo: String, descripcion: String, imagen:String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
}
}