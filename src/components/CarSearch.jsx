"use client";

import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CarSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const type = searchParams.get("type") || "";

  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchValue) {
        params.set("search", searchValue);
      } else {
        params.delete("search");
      }

      router.push(`/cars?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleType = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("type", value);
    } else {
      params.delete("type");
    }

    router.push(`/cars?${params.toString()}`);
  };

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
      <Input
        label="Search Car"
        placeholder="Search by car name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => handleType(e.target.value)}
        className="h-14 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none dark:border-gray-700 dark:bg-gray-900"
      >
        <option value="">All Types</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="Luxury">Luxury</option>
        <option value="Coupe">Coupe</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Van">Van</option>
      </select>
    </div>
  );
};

export default CarSearch;