import { Dispatch, SetStateAction, useState } from "react";

interface SearchProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

// const SearchBox: React.FC<{ props: SearchProps }> = ({ props }) => {
const SearchBox = ({ searchValue, setSearchValue }: SearchProps) => {
    const [query, setQuery] = useState("");

    return (
        <>
            <div className="relative w-full sm:w-full p-4">
                <input
                    className="block w-full sm:w-full pl-10 pr-3 py-2 rounded-full placeholder-gray-500 text-gray-900
            bg-gray-200 focus:outline-none focus:bg-gray-100 focus:placeholder-gray-400
            focus:text-gray-900 sm:text-sm transition duration-500 ease-in-out "
                    type="text"
                    aria-label="Search"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="type to search"
                />
            </div>
        </>
    );
};

export default SearchBox;
