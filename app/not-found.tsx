import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
      <Link href="/">
        Go back home
      </Link>
    </div>
  );
}