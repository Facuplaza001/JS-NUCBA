class pizza {
    constructor (id,nombre,ingredientes,precio){
        this.id= id;
        this.nombre= nombre;    
        this.ingredientes= ingredientes;
        this.precio= precio;
    }
}

const pizzas = [
    {   id:1,
        nombre: "Pizza muzzarella",
        ingredientes: ["Queso muzzarella", "Tomate"],
        precio: 700
    },
    {   id:2,
        nombre: "Pizza 4 quesos",
        ingredientes: ["Queso roquefort", "Queso muzzarella", "Queso parmesano", "Queso gouda", "Tomate"],
        precio: 900
    },
    {   id:3,
        nombre: "Pizza margarita",
        ingredientes: ["Tomate", "Queso muzzarella", "albahaca"],
        precio: 950
    },
    {   id:4,
        nombre: "Pizza de champiñones",
        ingredientes: ["Tomate", "Queso muzzarella", "champiñones", "aceitunas", "jamon"],
        precio:1000
    },
    {   id:5,
        nombre: "Pizza de anana",
        ingredientes: ["Tomate", "Anana", "Queso fresco", "Jamon"],
        precio: 1100
    },
    {   id:6,
        nombre: "Pizza de palmitos",
        ingredientes: ["Tomate", "Queso fresco", "Palmitos", "Jamon", "Salsa golf"],
        precio: 1200
    }, 
]

 pizzas.forEach((pizza) => {
     if(pizza.id % 2!==0){
        console.log("la "+ pizza.nombre + " tiene un id impar");
    } 
    })



 const buscarPizzaQueValgaMenosQue600 = pizzas.some((elemento) => elemento.precio < 600);
    if (buscarPizzaQueValgaMenosQue600 == false) {console.log("No hay ninguna pizza que salga menos que 600")}
     else {console.log("Hay por lo menos una pizza que salga menos que 600")};

 pizzas.forEach((elemento) => {
    console.log("la "+elemento.nombre+" tiene un valor de "+elemento.precio+" $");
})
  
pizzas.forEach((pizza)=>{
    console.log("la "+pizza.nombre+" tiene estos ingredientes: ")

    pizza.ingredientes.map  ((ingred) =>{
        console.log("-"+ingred)
    })
})

