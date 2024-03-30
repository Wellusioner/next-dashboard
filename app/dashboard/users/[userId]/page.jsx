import React from 'react';
import {
  MdChevronLeft,
  MdPerson
} from "react-icons/md";
import Link from "next/link";
import {fetchSingleUser} from "lib/fetchData";
import { updateUser } from "lib/actions";

const UserView = async ({ params }) => {
  const { userId } = params;
  const user = await fetchSingleUser(userId);
  const {
    username,
    email,
    phone,
    isAdmin,
    isActive,
    address
  } = user;

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
            <MdPerson/>
          </span>
            <p>{username}</p>
          </div>
        </div>
        <div className="basis-3/4">
          <div className={"rounded-lg bg-secondary h-full"}>
            <form action={updateUser} className={"p-5"}>
              <input type="hidden" name={"id"} value={userId}/>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="username">Username</label>
                <input placeholder={username} name={"username"} type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="email">Email</label>
                <input placeholder={email} name="email" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="password">Password</label>
                <input name="password" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="phone">Phone</label>
                <input placeholder={phone} name="phone" type="text" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"} />
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="role">is Admin?</label>
                <select defaultValue={isAdmin} name="role" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="status">is Active?</label>
                <select defaultValue={isActive} name="status" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary"}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <div className={"mb-3"}>
                <label className={"inline-block text-light mb-1"} htmlFor="address">Address</label>
                <textarea placeholder={address} rows={3} name="address" className={"px-3 py-2 outline-none text-xl w-full border border-2 border-gray bg-primary resize-none"} />
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