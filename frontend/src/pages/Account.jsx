import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("profile"));

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(user)
    );

    setEditing(false);
    alert("✅ Profile Updated Successfully");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Account
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="university"
            placeholder="University Name"
            value={user.university}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="course"
            placeholder="Current Course"
            value={user.course}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="flex gap-4 mt-6">
          {editing ? (
            <button
              onClick={handleSave}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg"
            >
              Save Profile
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg"
            >
              Edit Profile
            </button>
          )}

          <button
            onClick={handleLogout}
            className="flex-1 bg-red-600 text-white py-3 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;