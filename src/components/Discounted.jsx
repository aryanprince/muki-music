import React from 'react'
import { books } from '../data'
import Book from './ui/Book'

export default function Discounted() {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    {/* SECTION TITLE */}
                    <h2 className="section__title">
                        Discounted <span className="purple">Books</span>
                    </h2>

                    {/* DISCOUNTED BOOKS */}
                    <div className="books">
                        {books
                            .filter((book) => book.salePrice > 0)
                            .slice(0, 8)
                            .map((book) => (
                                <Book book={book} key={book.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
