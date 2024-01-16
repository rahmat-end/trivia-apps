/** @format */

import { useState } from "react";

function useSearch() {
  // State untuk menyimpan nilai pencarian
  const [searchValue, setSearchValue] = useState("");

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
  };
}

export default useSearch;
