class PokedexAPI {

    constructor() {
        this.form = document.querySelector(".group-form-class")
        this.name = document.querySelector ("#name-id")
        this.imgPokemon = document.querySelector ("#img-pokemon-id")
        this.content = document.querySelector ("#content-id")
        this.html = ''
        this.url = "https://pokeapi.co/api/v2/pokemon/"
    
        this.form.addEventListener("submit", (e) => {
            e.preventDefault()
            this.submitAction()        
        })
    }

    
    async submitAction() {
        
        // Creating URL
        this.url = this.url + this.name.value 
        this.url = this.url.toLowerCase()
        
        // Call API
        this.response = await fetch(this.url)
        this.data = await this.response.json()

        // Print search
        this.html = 'Name: ' + this.firstWord(this.data.name) + '<br>'
        this.html = this.html + 'Type: ' + this.firstWord(this.data.types[0].type.name) 
        this.content.innerHTML = this.html 

        this.imgPokemon.innerHTML = "<img src = '" + this.data.sprites.front_default + "'> <img src = '" + this.data.sprites.back_default + "'> "
    }

    
    firstWord(value) {
        return value[0].toUpperCase() + value.substr(1)
    }

}

const pokedexAPI = new PokedexAPI()