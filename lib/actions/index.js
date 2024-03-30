"use server"
import {Product, User} from '../models';
import { connectToDB } from "../utils";
import {revalidatePath} from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt';
import { signIn } from "app/auth";

export const addUser = async (formData) => {

  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive
    });
    await newUser.save();
  }
  catch (e) {
    throw new Error("Failed to create a new user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export const updateUser = async (formData) => {

  const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFields = {
      username, email, password, phone, address, isAdmin, isActive
    };

    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);

    await User.findByIdAndUpdate(id, updateFields);
  }
  catch (e) {
    throw new Error("Failed to update the current user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export const deleteUser = async (formData) => {

  const {
    id
  } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  }
  catch (e) {
    throw new Error("Failed to delete a user");
  }

  revalidatePath("/dashboard/users");
}

export const addProduct = async (formData) => {

  const {
    title,
    description,
    price,
    stock,
    color,
    size
  } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const newProduct = new Product({
      title,
      description,
      img: "https://images.samsung.com/is/image/samsung/p6pim/uk/feature/164461929/uk-feature--nbsp-535769885?$FB_TYPE_A_MO_JPG$",
      price,
      stock,
      color,
      size
    });
    await newProduct.save();
  }
  catch (e) {
    throw new Error("Failed to create a new product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export const updateProduct = async (formData) => {

  const {
    id,
    title,
    description,
    price,
    stock,
    color,
    size
  } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFields = {
      title,
      description,
      price,
      stock,
      color,
      size
    };

    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);

    await Product.findByIdAndUpdate(id, updateFields);
  }
  catch (e) {
    throw new Error("Failed to update the current product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export const deleteProduct = async (formData) => {

  const {
    id
  } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);
  }
  catch (e) {
    throw new Error("Failed to delete a product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {username, password});
  }
  catch (e) {
    return "Wrong credentials!"
  }
};