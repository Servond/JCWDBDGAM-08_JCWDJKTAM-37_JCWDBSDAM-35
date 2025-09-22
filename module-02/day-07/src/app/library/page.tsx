"use client";

import { useState } from "react";
import axios from "axios";

interface IBook {
  author_name: string[];
  cover_edition_key: string;
  title: string;
  first_publish_year: number;
}

export default function Library() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [input, setInput] = useState<string>("");

  const onSubmit = async () => {
    try {
      if (!input) throw new Error("INPUT FILTER TIDAK BOLEH KOSONG");

      const { data } = await axios.get(
        `https://openlibrary.org/search.json?title=${input}`
      );

      setBooks(data.docs);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="w-[1110px] mx-auto mt-[80px]">
      <div className="flex flex-col gap-5">
        <label htmlFor="input">Search By Title</label>
        <div className="flex gap-5">
          <input
            className="border border-white rounded-sm p-2 focus:outline-none w-[400px]"
            type="text"
            placeholder="search by title..."
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <button
            className="border border-white rounded-sm p-2"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {books.length > 0 &&
          books.map((book, idx) => (
            <div key={idx} className="flex gap-10">
              <span>{book.cover_edition_key || "TIDAK ADA COVER KEY"}</span>
              <span>{book.title}</span>
              <span>{book.author_name}</span>
              <span>{book.first_publish_year}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
