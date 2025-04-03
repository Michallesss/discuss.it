type Props = {
  error: any;
}

export default function ErrorMessage({ error }: Props) {
  if (!error?.message) return null;

  return (
    <p className="text-sm font-light text-red-500 dark:text-red-400">
      {error.message}
    </p>
  );
}