import React from 'react';
import {
  MdSupervisedUserCircle
} from 'react-icons/md'
import Chart from 'components/dashboard/Chart'

const Dashboard = () => {
  return (
    <div>
      <div className={"flex gap-3 mb-5"}>
        <div className={"basis-1/3"}>
          <div className={"bg-secondary hover:bg-gray rounded-lg p-5 flex"}>
            <span className={"text-2xl mr-3"}><MdSupervisedUserCircle /></span>
            <div className={"flex flex-col items-start"}>
              <span className={"mb-3 text-xl"}>Total Users</span>
              <span className={"mb-3 text-4xl font-semibold"}>10 928</span>
              <p><span className={"text-success font-medium"}>12%</span> more than last week</p>
            </div>
          </div>
        </div>
        <div className={"basis-1/3"}>
          <div className={"bg-secondary hover:bg-gray rounded-lg p-5 flex"}>
            <span className={"text-2xl mr-3"}><MdSupervisedUserCircle /></span>
            <div className={"flex flex-col items-start"}>
              <span className={"mb-3 text-xl"}>New Users</span>
              <span className={"mb-3 text-4xl font-semibold"}>895</span>
              <p><span className={"text-success font-medium"}>7%</span> less than last week</p>
            </div>
          </div>
        </div>
        <div className={"basis-1/3"}>
          <div className={"bg-secondary hover:bg-gray rounded-lg p-5 flex"}>
            <span className={"text-2xl mr-3"}><MdSupervisedUserCircle /></span>
            <div className={"flex flex-col items-start"}>
              <span className={"mb-3 text-xl"}>Active Users</span>
              <span className={"mb-3 text-4xl font-semibold"}>143</span>
              <p><span className={"text-success font-medium"}>11%</span> more than last week</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"bg-secondary p-5 mb-5 rounded-lg"}>
        <h2 className={"text-2xl font-light text-light mb-4"}>Latest Transactions</h2>
        <table className={"w-full"}>
          <thead className={"text-left border-b border-b-gray"}>
            <tr>
              <th className={"px-4 py-3"}>Name</th>
              <th className={"px-4 py-3"}>Status</th>
              <th className={"px-4 py-3"}>Date</th>
              <th className={"px-4 py-3"}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={"p-4"}>Doston Hamdamov</td>
              <td className={"p-4"}><span className={"bg-success text-sm py-1 rounded-md px-3"}>Done</span></td>
              <td className={"p-4"}>14.03.24</td>
              <td className={"p-4"}>$3 500</td>
            </tr>
            <tr>
              <td className={"p-4"}>Doston Hamdamov</td>
              <td className={"p-4"}><span className={"bg-info text-sm py-1 rounded-md px-3"}>Pending</span></td>
              <td className={"p-4"}>14.03.24</td>
              <td className={"p-4"}>$3 500</td>
            </tr>
            <tr>
              <td className={"p-4"}>Doston Hamdamov</td>
              <td className={"p-4"}><span className={"bg-danger text-sm py-1 rounded-md px-3"}>Cancelled</span></td>
              <td className={"p-4"}>14.03.24</td>
              <td className={"p-4"}>$3 500</td>
            </tr>
            <tr>
              <td className={"p-4"}>Doston Hamdamov</td>
              <td className={"p-4"}><span className={"bg-success text-sm py-1 rounded-md px-3"}>Done</span></td>
              <td className={"p-4"}>14.03.24</td>
              <td className={"p-4"}>$3 500</td>
            </tr>
            <tr>
              <td className={"p-4"}>Doston Hamdamov</td>
              <td className={"p-4"}><span className={"bg-danger text-sm py-1 rounded-md px-3"}>Cancelled</span></td>
              <td className={"p-4"}>14.03.24</td>
              <td className={"p-4"}>$3 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={"p-5 bg-secondary rounded-lg"}>
        <h3 className={"text-2xl font-light text-light mb-4"}>Weekly Recap</h3>
        <div className={"h-[400px]"}>
          <Chart />
        </div>
      </div>


    </div>
  );
};

export default Dashboard;