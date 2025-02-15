"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Header() {
  const { data: session } = useSession();

  const handleSignout = async () => {
    try {
      await signOut();
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={handleSignout}>Signout</button>
      {session ? (
        <div>Welcome</div>
      ) : (
        <div>
          <Link href="/login">Login</Link>
          <Link href="/register"></Link>
        </div>
      )}
    </div>
  );
}

export default Header;
