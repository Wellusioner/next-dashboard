import React from 'react';
import Link from "next/link";
import {
  MdVisibility,
  MdDelete
} from "react-icons/md";
import {fetchUsers} from "lib/fetchData";
import SearchInput from "components/searchInput";
import Pagination from "components/Pagination";
import { deleteUser } from "lib/actions";

const Users = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {users, total} = await fetchUsers(q, page);

  return (
    <div className={"bg-secondary p-5 rounded-lg"}>
      <div className={"flex justify-between items-center mb-5"}>
        <SearchInput />
        <Link href={"/dashboard/users/add"} className={'bg-pink py-1 px-2 rounded-md'}>Add new</Link>
      </div>
      <table className={"w-full mb-3"}>
        <thead className={"border-b border-b-gray text-left"}>
          <tr>
            <th className={"p-3"}>Name</th>
            <th className={"p-3"}>Email</th>
            <th className={"p-3"}>Created at</th>
            <th className={"p-3"}>Role</th>
            <th colSpan={2} className={"p-3"}>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(({ id, username, email, createdAt, isAdmin, isActive}, key) => (
            <tr key={key}>
              <td className={"p-3"}>{username}</td>
              <td className={"p-3"}>{email}</td>
              <td className={"p-3"}>{(new Date(createdAt)).toLocaleDateString()}</td>
              <td className={"p-3"}>{isAdmin ? "Admin" : "User"}</td>
              <td className={"p-3"}>{ isActive ? "Active" : "Passive"}</td>
              <td className={"p-3"}>
                <div className={"flex items-center justify-end"}>
                  <Link href={`/dashboard/users/${id}`} className={"flex items-center ml-2 bg-success py-1 px-3 rounded-md"}><span className={"mr-1"}><MdVisibility/></span>View</Link>
                  <form action={deleteUser}>
                    <input type="hidden" name={"id"} value={id}/>
                    <button className={"flex items-center ml-2 bg-danger py-1 px-3 rounded-md"}><span className={"mr-1"}><MdDelete/></span>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <Pagination total={total} />
    </div>
  );
};

export default Users;