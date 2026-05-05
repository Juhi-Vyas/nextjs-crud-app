"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "../../lib/api";

export default function UserPage() {
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!id) return;

    api.get(`/users/${id}`).then((res) => {
      setUser(res.data);
      setForm({
        name: res.data.name,
        email: res.data.email,
      });
    });
  }, [id]);

  const handleUpdate = async () => {
  const updatedUser = { ...user, ...form };

  setUser(updatedUser);
  setEditMode(false);

  localStorage.setItem(`user-${id}`, JSON.stringify(updatedUser));

  try {
    await api.put(`/users/${id}`, updatedUser);
  } catch (err) {
    console.error(err);
  }
};

  const handleDelete = async () => {
  localStorage.removeItem(`user-${id}`);

  router.push("/users");

  try {
    await api.delete(`/users/${id}`);
  } catch (err) {
    console.error(err);
  }
};

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>User Details</h2>

      <div className="card">
        {editMode ? (
          <>
            <input
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <button className="update-btn" onClick={handleUpdate}>
              Save
            </button>
          </>
        ) : (
          <>
            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <button
              className="update-btn"
              onClick={() => setEditMode(true)}
            >
              Update
            </button>

            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}