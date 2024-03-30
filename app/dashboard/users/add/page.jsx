import React from 'react';
import {
  MdChevronLeft,
} from "react-icons/md";
import Link from "next/link";
import {addUser} from "lib/actions";

const UserView = () => {
  return (
    <>
      <Link href={"/dashboard/users"} replace className={"mb-3 inline-flex items-center bg-gray hover:bg-gray rounded-md py-1 px-3"}>
        <span className={"mr-1"}><MdChevronLeft/></span>
        Back
      </Link>
      <div className={"rounded-lg bg-secondary max-w-[1200px]"}>
        <form action={addUser} className={"p-5"}>
          <div className="flex gap-5 mb-5">
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="username">Username</label>
              <input name={"username"} type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="email">Email</label>
              <input name="email" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
          </div>

          <div className="flex gap-5 mb-5">
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="password">Password</label>
              <input name="password" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="phone">Phone</label>
              <input name="phone" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
            </div>
          </div>

          <div className="flex gap-5 mb-5">
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="role">is Admin?</label>
              <select name="role" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"}>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>
            <div className="basis-1/2">
              <label className={"inline-block text-light mb-1"} htmlFor="status">is Active?</label>
              <select name="status" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className={"mb-5"}>
            <label className={"inline-block text-light mb-1"} htmlFor="address">Address</label>
            <textarea rows={3} name="address" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary resize-none"} />
          </div>

          <button className={"bg-success bg-opacity-90 hover:bg-opacity-100 p-3 w-full rounded-md"}>Submit</button>
        </form>
      </div>
    </>

  );
};

export default UserView;