import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import { User } from "@/types";
import Link from "next/link";
import { JsxElement } from "typescript";

export const metadata: Metadata = {
  title: "Users",
};
export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <br />
        </>
      ))}
    </section>
  );
  return content;
}
