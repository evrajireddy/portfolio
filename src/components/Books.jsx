import { useState, useEffect } from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';

const RenderBook = ({ item }) => {
    return (

        <span
        className="card shadow-lg compact bg-base-100 cursor-pointer">
            <div className="flex justify-between flex-col p-8 h-full w-full">
                <div>
                    <div className="flex items-center truncate">
                        <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                            <MdInsertLink className="my-auto" />
                            <span>{item.title}</span>
                        </div>
                    </div>
                    <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
                        {item.first_sentence}
                    </p>
                </div>
                <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
                    <div className="flex flex-grow">
                        <span className="mr-3 flex items-center">
                            <AiOutlineStar className="mr-0.5" />
                            <span>{item.ratings_count}</span>
                        </span>

                    </div>
                    <div>
                        <span className="flex items-center">
                            <div
                                className="w-3 h-3 rounded-full mr-1 opacity-60"
                            />
                            <span>By: {item.author_name}</span>
                        </span>
                    </div>
                </div>
            </div>
        </span>
    )
};


function Books({ }) {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?q=computer+programming&fields=key,title,author_name,ratings_count,first_sentence&sort=rating`)
            .then(responseB => responseB.json())
            .then(dataB => {
                //console.log("after books projects success");
                //console.log(dataB);
                setBooks(dataB);
                console.log(dataB);

            })
            .catch(error => console.error('Error: fetching getBooksProject details failed:', error));
    },[]);
    return (
        <div className="lg:col-span-2 col-span-1">
            <div className="grid grid-cols-1 gap-6">

                <div className="col-span-1 lg:col-span-2">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <div className="card compact bg-base-100 shadow bg-opacity-40">
                                <div className="card-body">
                                    <div className="mx-3 flex items-center justify-between mb-2">
                                        <h5 className="card-title">

                                            <span className="text-base-content opacity-70">
                                                Books
                                            </span>

                                        </h5>



                                    </div>
                                    <div className="col-span-2">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {console.log(books)}
                                            {books && books.docs && books.docs.map((item, index) => (
                                                <RenderBook
                                                    key={index}
                                                    item={item} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
Books.RenderBook = RenderBook;
export default Books;
