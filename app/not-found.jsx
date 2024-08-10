import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex !h-screen !w-screen flex-col items-center justify-center text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="text-red-500" href="/">
        Return Home
      </Link>
    </div>
  );
}
