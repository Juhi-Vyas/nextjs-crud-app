"use client";

import { useEffect, useState } from "react";
import api from "../lib/api";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>

      {users.map((user) => (
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <Link href={`/users/${user.id}`}>
            <button className="view-btn">View</button>
          </Link>
        </div>
      ))}
    </div>
  );
}