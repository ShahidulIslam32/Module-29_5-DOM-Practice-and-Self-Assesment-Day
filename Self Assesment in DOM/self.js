let JsBooksNames = [
    'You Dont Know JS',
    'Eloquent JavaScript: A Modern Programming',
    'JavaScript: The Good Parts',
    'JavaScript: The Definitive Guide',
    'Effective JavaScript: 68 Specific the Power of JavaScript',
    'JavaScript & JQuery: Interactive', 
    'A Smarter Way to Learn JavaScript',
    'Node JS',
    'React - A JS Framework'
]

let search = 'javaScript'
let output = []

for (let book of JsBooksNames){
    if (book.toLowerCase().includes(search.toLowerCase())){
        output.push(book)

    }
    
}


console.log(output);