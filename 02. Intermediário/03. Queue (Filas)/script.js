function Queue() {

    let items = []

    // Add a new item
    this.enQueue = function(element) {
        items.push(element)
    }

    // Remove a item
    this.deQueue = function() {
        return items.shift() 
    }

    // Return the 1st element in queue
    this.front = function() {
        return items[0]
    }

    // Check if a queue is empty or not
    this.isEmpty = function() {
        return items.length === 0
    }

    // Return the size of queue
    this.size = function() {
        return items.length
    }

    // Print the queue in console
    this.print = function() {
        console.log (items.toString())
    }

}