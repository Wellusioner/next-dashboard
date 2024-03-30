import React from 'react';
import Link from 'next/link';
import {
  MdVisibility,
  MdDelete
} from "react-icons/md";
import {fetchProducts} from "lib/fetchData";
import Pagination from "components/Pagination";
import SearchInput from "components/searchInput";
import { deleteProduct } from "lib/actions";

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {products, total} = await fetchProducts(q, page);

  return (
    <div className={"bg-secondary p-5 rounded-lg"}>
      <div className={"flex justify-between items-center mb-5"}>
        <SearchInput />
        <Link href={`/dashboard/products/add`} className={'bg-pink py-1 px-2 rounded-md'}>Add new</Link>
      </div>
      <table className={"w-full mb-3"}>
        <thead className={"border-b border-b-gray text-left"}>
        <tr>
          <th className={"p-3"}>Title</th>
          <th className={"p-3"}>Description</th>
          <th className={"p-3"}>Price</th>
          <th className={"p-3"}>Created at</th>
          <th className={"p-3"} colSpan={2}>Stock</th>
        </tr>
        </thead>
        <tbody>
          {
            products?.map(({id, title, description, price, stock, createdAt}, key) => (
              <tr key={key}>
                <td className={"p-3"}>{title}</td>
                <td className={"p-3"}>{description}</td>
                <td className={"p-3"}>${price}</td>
                <td className={"p-3"}>{(new Date(createdAt).toLocaleDateString())}</td>
                <td className={"p-3"}>{stock}</td>
                <td className={"p-3"}>
                  <div className={"flex items-center justify-end"}>
                    <Link href={`/dashboard/products/${id}`} className={"flex items-center ml-2 bg-success py-1 px-3 rounded-md"}><span className={"mr-1"}><MdVisibility/></span>View</Link>
                    <form action={deleteProduct}>
                      <input type="hidden" value={id} name={"id"}/>
                      <button className={"flex items-center ml-2 bg-danger py-1 px-3 rounded-md"}><span className={"mr-1"}><MdDelete/></span>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination total={total}/>
    </div>
  );
};

export default Products;