import React from "react";
import getUser from "@/lib/getUser";
import getPosts from "@/lib/getPosts";
import { Post, User } from "@/types";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(id);
  const user = await userData;
  return {
    title: user.name,
    description: user.name,
  };
}

export default async function UserDetail({ params }: Params) {
  const userData: Promise<User> = getUser(params.id);
  const postData: Promise<Post[]> = getPosts(params.id);

  // @ fetching users & posts using Promise.all()
  // const [user, posts] = await Promise.all([userData, postData]);
  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={postData} />
      </Suspense>
    </>
  );
}
