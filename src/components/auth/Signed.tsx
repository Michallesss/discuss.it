'use server'
import React from "react";
import { getAuthToken } from "@/services/get-token";

type Props = {
  children: React.ReactNode;
  In?: boolean;
  Out?: boolean;
}

export default async function Signed({ children, In, Out }: Props) {
  const hasToken = await getAuthToken();

  if (hasToken && In) return <>{children}</>;
  else if (!hasToken && Out) return <>{children}</>;
}