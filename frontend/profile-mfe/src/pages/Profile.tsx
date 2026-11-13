import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types/redux";
import { getUserById, updateUser } from "../api/userApi";

interface User {
  id: string;
  name: string;
  email: string;
}

function Profile() {
  const dispatch = useDispatch();

  const authUser = useSelector((state: RootState) => state.auth.user);

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!authUser?.id) return;

    const fetchUser = async () => {
      try {
        setLoading(true);

        const data = await getUserById(authUser.id);

        setUser(data);

        setFormData({
          name: data.name,
          email: data.email,
        });
      } catch {
        setError("Failed to fetch user information");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [authUser?.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) return;

    try {
      setSaving(true);
      setError("");

      const updatedUser = await updateUser(user.id, formData);

      setUser(updatedUser);
      setEditing(false);
      dispatch({
        type: "auth/updateUser",
        payload: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      });
    } catch {
      setError("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading profile...</p>;

  if (error && !user) return <p>{error}</p>;

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>My Profile</h1>

      {editing ? (
        <form onSubmit={handleUpdate}>
          <h2>Edit Profile</h2>

          <div>
            <label>Name</label>
            <br />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <div>
            <label>Email</label>
            <br />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => {
              setFormData({
                name: user.name,
                email: user.email,
              });

              setEditing(false);
              setError("");
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h2>User Information</h2>

          <p>
            <strong>User ID:</strong> {user.id}
          </p>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default Profile;
