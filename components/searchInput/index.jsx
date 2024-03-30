"use client"
import React from 'react';
import {MdSearch} from "react-icons/md";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", '1');

    if(e.target.value){
      params.set("q", e.target.value);
    }else{
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 500);

  return (
    <div className={"flex items-center rounded-lg bg-gray"}>
      <span className={"text-xl px-2 text-light"}><MdSearch/></span>
      <input onChange={handleSearch} type="text" className={"border-0 bg-transparent py-1 pr-2 outline-none"} placeholder={"Search for user"}/>
    </div>
  );
};

export default SearchInput;