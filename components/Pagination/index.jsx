"use client"
import React from 'react';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Pagination = ({ total }) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = parseInt(searchParams?.get("page") || '1');
  const perPage = 2;

  const hasPrev = parseInt(page) > 1;
  const hasNext = Math.ceil(total / perPage) > page;

  const handlePrev = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page - 1));
    replace(`${pathname}?${params}`);
  }
  const handleNext = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page + 1));
    replace(`${pathname}?${params}`);
  }
  return (
    <div className={'flex'}>
      <button className={`flex items-center ml-2 rounded-md bg-gray ${hasPrev ? 'hover:bg-pink' : 'cursor-not-allowed'} py-1 px-2`} disabled={!hasPrev} onClick={handlePrev}>
        <span><MdChevronLeft/></span>
        Prev
      </button>
      <button className={`flex items-center ml-2 rounded-md bg-gray ${hasNext ? 'hover:bg-pink' : 'cursor-not-allowed'} py-1 px-2`} disabled={!hasNext} onClick={handleNext}>
        Next
        <span><MdChevronRight/></span>
      </button>
    </div>
  );
};

export default Pagination;