import { User, Product } from "../models";
import {connectToDB} from "../utils";

const perPage = 2;

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, 'i');

  const option = { username: { $regex: regex }};

  try {
    await connectToDB();
    const total = await User.find(option).count();
    const users =  await User.find(option).limit(perPage).skip(perPage * (page - 1));

    return {
      users,
      total
    }
  }
  catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export const fetchSingleUser = async (id) => {
  try {
    await connectToDB();
    return await User.findById(id);
  }
  catch (e) {
    console.log(e);
    throw new Error("Failed to fetch a single user");
  }
}

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, 'i');

  const option = { title: { $regex: regex }};

  try {
    await connectToDB();
    const total = await Product.find(option).count();
    const products =  await Product.find(option).limit(perPage).skip(perPage * (page - 1));

    return {
      products,
      total
    }
  }
  catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export const fetchSingleProduct = async (id) => {
  try {
    await connectToDB();
    return await Product.findById(id);
  }
  catch (e) {
    console.log(e);
    throw new Error("Failed to fetch a single product");
  }
}