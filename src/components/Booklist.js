import React from "react";
import { useState, useEffect } from 'react';
import Search from "./Search";


const Booklist = () => {
        const [books, setBooks] = useState([])

        const [isLoading, setIsLoading ] = useState(true)

        const [searchTerm, setSearchTerm] = useState('JKRowling')

      
        
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then((res) => res.json())
    .then((books) => setBooks(books.items));
    setIsLoading(false)

  }, [searchTerm]);
    
    
    return  isLoading ? (<p>Loading ...</p>) : 
    (
        <>
        <Search setSearchTerm={setSearchTerm} />
        <ul className='bookList'>
          {books.map((book) => {
         return  <li key={book.id} className='bookBox'>
                <h2>{book.volumeInfo.title}</h2>
               <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No author'}</p>
               <img className='bookThumbnail' src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fbook-mascot-vector-id472382895%3Fk%3D6%26m%3D472382895%26s%3D612x612%26w%3D0%26h%3DvV1GqLQMLmAUcKpXnZyLsONJXtAzo_Zm5_jQ99bN8k8%3D&f=1&nofb=1' }  />
                <p>{book.volumeInfo.description}</p>
                
                
                
            </li>
}  
 )}
        </ul>
        </>
    )
}

export default Booklist;


// map((author) => {
//     return ` ${author}.`
// })


// [{"id": "S0lVyYcw8tsC",
//         "etag": "9z7kM5TUjOU",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/S0lVyYcw8tsC",
//         "volumeInfo": {
//             "title": "Lolita",
//             "authors": [
//                 "Vladimir Nabokov"
//             ],
//             "publisher": "Penguin UK",
//             "publishedDate": "2012-07-27",
//             "description": "'Lolita is comedy, subversive yet divine ... You read Lolita sprawling limply in your chair, ravished, overcome, nodding scandalized assent' Martin Amis, Observer Poet and pervert, Humbert Humbert becomes obsessed by twelve-year-old Lolita and seeks to possess her, first carnally and then artistically, out of love, 'to fix once for all the perilous magic of nymphets'. Is he in love or insane? A silver-tongued poet or a pervert? A tortured soul or a monster? Or is he all of these? Humbert Humbert's seduction is one of many dimensions in Nabokov's dizzying masterpiece, which is suffused with a savage humour and rich, elaborate verbal textures. Filmed by Stanley Kubrick in 1962 starring James Mason and Peter Sellers, and again in 1997 by Adrian Lyne starring Jeremy Irons and Melanie Griffith, Lolita has lost none of its power to shock and awe."}}]