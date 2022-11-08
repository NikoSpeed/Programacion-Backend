const Contenedor = require('./index.js')


const item1 = {
    title: "Manzana",
    price: 80,
    thumbnail: "https://cdn1.iconfinder.com/data/icons/vegan-flat/340/vegetarian_vegan_tomato_vegetable_food_organic_healthy_plant-512.png",
    id:1
}

const item2 = {
    title: "Pera",
    price: 50,
    thumbnail: "https://cdn1.iconfinder.com/data/icons/vegan-flat/340/vegetarian_vegan_food_pear_fruit_leaf_healthy-512.png",
    id:2
}
const item3 = {
    title: "Sandia",
    price: 120,
    thumbnail: "https://cdn1.iconfinder.com/data/icons/vegan-flat/340/vegetarian_vegan_watermelon_fruit_sweet_dessert_food_juicy_healthy_melon-512.png",
    id:3
}


async function main(){
    const contenedor = new Contenedor('./productos.txt')
    let datos = await contenedor.getAll()
    console.log(datos)

    let id1 = await contenedor.save(item1)
    console.log(id1)
    let id2 = await contenedor.save(item2)
    console.log(id2)

    let datos2 = await contenedor.getAll()
    console.log(datos2)

    let buscador = await contenedor.getById(2)
    console.log(buscador)

    let borrarTodo = await contenedor.deleteAll()
    let borrarPorId = await contenedor.deleteById(1)

}

main()