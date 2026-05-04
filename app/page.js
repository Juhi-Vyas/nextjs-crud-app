import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Next.js CRUD App</h1>
      <p>Simple User Management using JSONPlaceholder API</p>

      <Link href="/users">
        <button className="view-btn">Go to Users</button>
      </Link>
    </div>
  );
}