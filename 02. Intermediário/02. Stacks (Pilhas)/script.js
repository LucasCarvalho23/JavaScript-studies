// ===================== STACKS =============================
function Stack() {
    let array = [1,2]
    // Add um element in Array
    this.push = function (element) {
        array.push(element)
    }
    
    
    // Remove a item of Array
    this.pop = function() {
        return array.pop()
    }
    
    
    // Return a item of Array
    this.peek = function () {
        return array[array.length -1]
    }
    
    
    // Inform if a stacks is empty or not
    this.isEmpty = function () {
        return array.length === 0
    }
    
    
    // Clear array
    this.clear = function() {
        array = []
    }
    
    
    // Inform a length of Array
    this.size = function () {
        return array.length
    }
    
    
    // Print array in console
    this.print = function () {
        console.log(array.toString())
    }
}

let stackArray = new Stack()

console.log(stackArray.print())

