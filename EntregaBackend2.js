class usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(`Abriendo informacion de ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombreMascota){
        void this.mascotas.push({nombreMascota})
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombreLibro, autor){
        this.libros.push({nombreLibro, autor})
    }

    getBookNames(){
        return this.libros.map(libro => libro.nombreLibro)
    }

}

const p = new usuario ('Pepito', 'Perez',[],[])

p.addBook("La rueda del tiempo", "Sanderson")
p.addMascota("Bichito")

p.getFullName()

infoUser(p)

function infoUser(p){
    console.log(`Su identidad es ${p.nombre} ${p.apellido}, el libro que posee es ${p.getBookNames()} y tiene un total de ${p.countMascotas()} mascotas.`)
}