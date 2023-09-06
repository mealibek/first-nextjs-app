import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is about page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      <h1>About Page</h1>
      <Link href={"/"}>Home</Link>
      {children}
    </div>
  );
}
