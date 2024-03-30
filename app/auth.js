import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from "../auth.config";
import { connectToDB } from "../lib/utils";
import { User } from "../lib/models";
import bcrypt from 'bcrypt';

const login = async (credentials) => {
  try{
    await connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if(!user) return ("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if(!isPasswordCorrect) return ("Wrong credentials!");

    return user
  }
  catch(e){
    console.log(e);
    return ("Failed to login");
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials){
        try {
          return await login(credentials)
        }catch (e) {
          console.log(e);
          return null
        }
      },
    })
  ],
  callbacks: {
    async jwt({token, user}){
      if(user){
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({session, token}){
      if(token){
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    }
  }
})