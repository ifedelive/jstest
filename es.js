/*
    Per una nota App di food delivery, ci viene richiesto di 
    implementare alcune funzionalità per la gestione del carrello.
*/


//prodotti attualmente presenti nel carrello dell'utente
const productsInCart = [
    {id: 324234, category:0, quantity:1, title: 'Margherita', description: "Pomodoro, mozzarella e basilico", ingredients: ['pomodoro','mozzarella','basilico'], price: 6.5},
    {id: 098394, category:0, quantity:1, title: 'Calzone Classico', description: "Ripieno di Pomodoro, mozzarella e prosciutto cotto",ingredients: ['pomodoro','mozzarella','prosciutto cotto'], price: 7.0},
    {id: 432432, category:4, quantity:1, title: 'Coca Cola Zero (33CL)', description: "", price: 3.0},
    {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Pomodoro, mozzarella e salamino piccante", ingredients: ['pomodoro','mozzarella','salamino'], price: 7.5},
    {id: 564564, category:0, quantity:1, title: 'Salamino', description: "Mozzarella, salsiccia, patate al forno", ingredients: ['mozzarella','salsiccia','patate al forno'], price: 7.5},
    {id: 333445, category:4, quantity:1, title: 'Acqua Naturale (1L)', description: "", price: 2},
    {id: 656765, category:3, quantity:3, title: 'Cheesecake Cioccolato', description: "Dolce a base di formaggio fresco e topping al cioccolato", price: 5},
]

//array statico di oggetti che contiene tutte le categorie presenti nell'app
const categories = [
    {id:0, name: "pizze"},
    {id:1, name: "panini"},
    {id:2, name: "sushi"},
    {id:3, name: "dessert"},
    {id:4, name: "bevande"},
]; 

//FUNZIONI DA IMPLEMENTARE:

/* 
    ---------------------------------------
    getTotalAmount: restituisce il prezzo finale che l'utente dovrà pagare al checkout
    ---------------------------------------
*/
function getTotalAmount () {
    let sum = 0
    for (let i=0; i<productsInCart.length; i++) {
        sum += productsInCart[i].price * productsInCart[i].quantity
    }
    return sum
}

getTotalAmount()
console.log(getTotalAmount())

/* 
    ---------------------------------------
    getCategoryCode: prende come parametro il nome di una categoria e ne restituisce l'id
    ---------------------------------------
*/    

function getCategoryCode (catName){
    return categories.find (cat => cat.name == catName).id
}

console.log(getCategoryCode("bevande"))
    
/*
    ---------------------------------------
    getCategoryCount: prende come parametro il nome di una categoria e restituisce il numero di prodotti presenti per questa
    ---------------------------------------
*/

function getCategoryCount(catName){
    let categoryid = getCategoryCode(catName) 
    if (categoryid == null){
        throw new Error ("null")
    }; 
    let elemento = productsInCart.filter (item => item.category == categoryid)
    return elemento.reduce((temp,value) => {
        return temp += value.quantity
    },0);

}

console.log(getCategoryCount('bevande'))

/*
    ---------------------------------------
    removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
    ---------------------------------------
*/

function removeFromCart(id){
    for (let i=0; i<productsInCart.length; i++){
        if (productsInCart[i].id === id){
            productsInCart[i].quantity -= 1
        }
        if (productsInCart[i].quantity === 0){
            productsInCart.splice(i,1)
            return
        }
    }
}

console.log(removeFromCart(656765))

/*
    ---------------------------------------
    printCart: stampa su console tutti i prodotti divisi per categoria. 

    formato richiesto:
        *** PIZZA ***
        - 1 x Margherita (Pomodoro, mozzarella e basilico) | 6.5€
        - 1 x Calzone classico (Ripieno di Pomodoro, mozzarella e prosciutto cotto) | 7€

        *** BEVANDE ***
        - 1 x Coca Cola Zero (33CL) | 3€

        *** TOTALE ***
        16.5€
    ---------------------------------------
*/

function printCart (productsInCart){
    for (let i=0; i<productsInCart.length; i++){

    }
}

/*
    ---------------------------------------
    getPizzeBianche: Restituisce tutte le pizze bianche presenti nel carrello (pizze senza pomodoro)
    ---------------------------------------

*/

function getPizzeBianche (){
    return productsInCart.filter (item=>item.ingredients = !("pomodoro"))
    
}

//console.log(getPizzeBianche(productsInCart))