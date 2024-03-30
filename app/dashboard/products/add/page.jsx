import React from 'react';
import Link from 'next/link';
import {
  MdChevronLeft
} from "react-icons/md";
import { addProduct } from "lib/actions";

const AddProduct = () => {
  return (
    <>
      <Link href={"/dashboard/products"} replace className={"mb-3 inline-flex items-center bg-gray hover:bg-gray rounded-md py-1 px-3"}>
        <span className={"mr-1"}><MdChevronLeft/></span>
        Back
      </Link>
      <div className={"rounded-lg bg-secondary max-w-[1200px]"}>
        <form action={addProduct} className={"p-5"}>
          <div className="mb-5">
            <label className={"inline-block text-light mb-1"} htmlFor="title">Title</label>
            <input name={"title"} type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
          </div>

          <div className="flex gap-5 mb-5">
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="price">Price</label>
              <input name="price" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="stock">Stock</label>
              <input name="stock" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
          </div>

          <div className="flex gap-5 mb-5">
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="color">Color</label>
              <input name="color" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="size">Size</label>
              <input name="size" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
          </div>

          <div className={"mb-5"}>
            <label className={"inline-block text-light mb-1"} htmlFor="description">Description</label>
            <textarea rows={3} name="description" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary resize-none"} />
          </div>

          <button className={"bg-success bg-opacity-90 hover:bg-opacity-100 p-3 w-full rounded-md"}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;