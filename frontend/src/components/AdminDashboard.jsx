import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin/contacts")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Category / Industry</th>
            <th>Timeline</th>
            <th>Budget</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.phone || "-"}</td>
              <td>{item.country || "-"}</td>
              <td>{item.category || item.industry || "-"}</td>
              <td>{item.timeline || "-"}</td>
              <td>{item.budget || "-"}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
