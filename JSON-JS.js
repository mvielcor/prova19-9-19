
const fetch = require('node-fetch');

 class Manel{
    constructor(){
        
        this.documentJSON;
    }
 }

const llistaUsuaris=() => {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((responseJson) => {
            
                this.documentJSON = responseJson
                //console.log(responseJson);
        })
        .catch(error => console.log(error)) //capturem els errors
}

let obj = new Manel();
llistaUsuaris();
console.log(obj.documentJSON);
