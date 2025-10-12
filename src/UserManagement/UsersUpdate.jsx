import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UsersUpdate({ users, onUpdateUser }) {
  const { id } = useParams(); // نجيب id من الـ URL
  const navigate = useNavigate(); // باش نرجعو بعد التحديث

  const [formData, setFormData] = useState({
    id: "",
    fullname: "",
    country: "",
  });

  // نجيب بيانات المستخدم اللي عندو نفس id
  useEffect(() => {
    const user = users.find((u) => u.id === parseInt(id));
    if (user) {
      setFormData(user);
    }
  }, [id, users]);

  // نبدل القيم داخل الفورم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // منين نكليكي "Update"
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(formData.id, formData); // نحدّث البيانات
    navigate("/"); // نرجع للصفحة الرئيسية
  };

  // لو المستخدم ما تلقاش
  if (!formData.id) {
    return <h4 className="text-center mt-4">User not found ❌</h4>;
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-4 w-50">
      <h3 className="mb-3 text-center text-primary">
        Update User #{formData.id}
      </h3>

      <div className="form-group mb-3">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          className="form-control"
          value={formData.fullname}
          onChange={handleChange}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          className="form-control"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="Morocco">Morocco</option>
          <option value="Palestine">Palestine</option>
          <option value="Tunisia">Tunisia</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success w-100">
        Update User
      </button>
    </form>
  );
}
