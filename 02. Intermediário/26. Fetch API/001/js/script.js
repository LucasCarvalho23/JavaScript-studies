class FirstAPI {

    constructor() {

        this.containerMain = document.querySelector ("#main-cointainer-id")
        this.titleCointainer = document.querySelector ("#title-cointainer-id")
        this.url = "https://jsonplaceholder.typicode.com/posts"

        this.getPost()

    }

    
    async getPost() {

        this.response = await fetch(this.url)
        console.log (this.response)
        this.data = await this.response.json()
        
        this.data.map((post) => {
            this.titleCointainer.innerText = `Title: ${post.title}` 
            this.containerMain.innerText = `Content: ${post.body}`
        })

    }

}

const firstAPI = new FirstAPI()