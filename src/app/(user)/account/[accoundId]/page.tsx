'use client'
import { useSearchParams } from 'next/navigation'

export default function AccountPage() {
  const searchParams = useSearchParams();
  const accoundId = searchParams.get('accoundId');

  return (
    <div>
      <h1>Account Page</h1>
    </div>
  );
}