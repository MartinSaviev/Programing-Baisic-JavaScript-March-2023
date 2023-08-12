function oldBook(input) {

    let book = input[0];

    let counter =  0;
    let index = 0;
    let searchBook = input[index];

    while (true) {

        index++;
        
        searchBook = input[index];
        if (book === searchBook) {
            
            console.log(`You checked ${counter} books and found it.`);
            break;
            
        }
   
        if (searchBook === 'No More Books') {
            console.log("The book you search is not here!");
            console.log(`You checked ${counter} books.`);
            break;
            
        }
        counter++;

    }
}
oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Trippe",
"Stella",
"The Matrix",
"Bourne"])






