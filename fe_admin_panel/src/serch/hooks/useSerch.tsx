/** @format */

import { useState } from "react";

function useSearch() {
  // State untuk menyimpan nilai pencarian
  const [searchValue, setSearchValue] = useState("");

  // Fungsi untuk menyimpan nilai pencarian
   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
   }

  // Fungsi untuk mengubah nilai pencarian
  const updateSearchValue = (newValue: string) => {
    setSearchValue(newValue);
  };

  // Fungsi untuk mereset nilai pencarian
  const resetSearchValue = () => {
    setSearchValue("");
  };

  // Mengembalikan nilai pencarian dan fungsi-fungsi terkait
  return {
    searchValue,
    updateSearchValue,
    resetSearchValue,
    handleSearchChange,
  };
}

export default useSearch;
