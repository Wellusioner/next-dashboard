import React from 'react';
import {
  MdChevronLeft,
  MdPerson
} from "react-icons/md";
import Link from "next/link";
import Image from 'next/image';
import { fetchSingleProduct } from "lib/fetchData";
import { updateProduct } from "lib/actions";

const UserView = async ({ params }) => {
  const { productId } = params;
  const product = await fetchSingleProduct(productId);
  const {
    title,
    description,
    price,
    img,
    stock,
    color,
    size
  } = product;

  return (
    <>
      <Link href={"/dashboard/users"} replace className={"mb-3 inline-flex items-center bg-gray hover:bg-gray rounded-md py-1 px-3"}>
        <span className={"mr-1"}><MdChevronLeft/></span>
        Back
      </Link>
      <div className={"flex max-w-[1400px]"}>
        <div className="basis-1/4">
          <div className={"text-center"}>
            <span className={"inline-block text-9xl bg-white text-gray mb-2 rounded-lg"}>
              {
                img
                ? <Image src={img} width={200} height={150} alt={title} className={"w-[200px] h-[150px]"} />
                : <MdPerson/>
              }
            </span>
          </div>
        </div>
        <div className="basis-3/4">
          <div className={"rounded-lg bg-secondary h-full"}>
            <form action={updateProduct} className={"p-5"}>
              <input type="hidden" name={"id"} value={productId}/>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="title">Username</label>
                <input placeholder={title} name={"title"} type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="price">Price</label>
                <input placeholder={price} name="price" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="stock">Stock</label>
                <input placeholder={stock} name="stock" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="color">Color</label>
                <input placeholder={color} name="color" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="size">Size</label>
                <input placeholder={size} name="size" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>

              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="description">Address</label>
                <textarea placeholder={description} rows={3} name="description" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary resize-none"} />
              </div>
              <button className={"bg-success bg-opacity-90 hover:bg-opacity-100 px-3 py-2 w-full rounded-md"}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserView;