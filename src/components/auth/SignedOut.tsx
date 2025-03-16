import React from "react";

type Props = {
  children: React.ReactNode;
}

export default function SignedOut({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}