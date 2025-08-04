import { useState } from "react";
import Link from "next/link";

import { SearchIcon, SquareArrowRight, CircleX } from "lucide-react";
import SearchLoader from "../ui/search-loader";

type Item = {
  id: string;
  name: string;
};

type SearchBarProps = {
  onSearch: (query: string) => Promise<Item[]>;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const items = await onSearch(query);
    console.log("Search results:", items);

    if (!items) {
      setResults([]);
      setLoading(false);
      return;
    }
    if (items.length === 0) {
      setResults([ { id: "", name: "Ver todos los productos" } ]);
      setLoading(false);
      return;
    }
    setQuery("");
    setResults(items);
    setLoading(false);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 flex items-center w-full max-w-md mx-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full space-x-2 outline-none"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Buscar productos..."
        />
        <button type="submit" disabled={loading}>
          {loading ? <SearchLoader /> : <SearchIcon className="h-5 w-5" />}
        </button>
      </form>
      {results.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-4">
          <div className="flex items-center justify-between mb-2">
            <button
              className="absolute -top-2 -left-2 text-red-500 hover:text-red-700 bg-white rounded-full"
              onClick={() => {
                setResults([]);
                setQuery("");
              }}
            >
              <CircleX className="h-8 w-8" />
            </button>
          </div>
          {loading && <p>Buscando...</p>}
          {!loading && results[0].id == "" && <p>No se encontraron productos</p>}
          {!loading && results.length > 0 && (
            <ul className="max-h-60 overflow-y-auto">
              {results.map((item) => (
                <Link
                  key={item.id}
                  href={`/dashboard/customer/products/${item.id}`}
                  className="py-2 px-4 hover:bg-gray-100 rounded-lg block text-gray-800 flex items-center justify-between"
                  onClick={() => {
                    setResults([]);
                    setQuery("");
                  }}
                >
                  <span className="text-sm font-medium">{item.name}</span>{" "}
                  <SquareArrowRight className="h-4 w-4 text-gray-500 ml-2" />
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
