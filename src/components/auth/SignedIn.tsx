import React from "react";

type Props = {
  children: React.ReactNode;
}

export default function SignedIn({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}