const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  /*
  function rent(elem) {
    return elem.rented >= 1;
  }
  console.log(books.every(rent));


const rentedBooks = books.filter(book => book.rented > 0);
const isEveryBookRented = rentedBooks.length === books.length;
console.log(isEveryBookRented);

*/
function rent(elem) {
    return elem.rented >= 1;
  }
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? : " + (books.every(rent)));

  renteds = []
  books.forEach( book => renteds.push(book.rented))
  console.log("le livre le plus emprinter est " + books[renteds.indexOf(Math.max(...renteds))].title)

  renteds = []
  books.forEach( book => renteds.push(book.rented))
  console.log("le livre le moins emprinter est " + books[renteds.indexOf(Math.min(...renteds))].title)

  console.log(books.find(book => book.id === 873495).title);
  
  ids = []  // array des id
  books.forEach(book => ids.push(book.id))
  console.log("livre à supprimer : ",books.splice([ids.indexOf(133712)], 1))
  console.log("array réduit: ",books)
 
  const id = books.findIndex(book => book.id === 133712);
  console.log(id);
  const sortedBooks = books.filter(book => book.id !== 133712).sort((a, b) => a.title.localeCompare(b.title));
  console.log(sortedBooks);