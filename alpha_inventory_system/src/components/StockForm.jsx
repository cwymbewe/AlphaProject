import { useState } from 'react';

export default function StockForm() {
  const [formData, setFormData] = useState({
    user: "",
    location: "",
    stock: [
      { item: "Item A", empty: "", full: "" },
      { item: "Item B", empty: "", full: "" },
      { item: "Item C", empty: "", full: "" }
    ]
  });

  const handleInputChange = (e, index, field) => {
    const newStock = [...formData.stock];
    newStock[index][field] = e.target.value;
    setFormData({ ...formData, stock: newStock });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-300">
      <h2 className="text-xl font-bold text-center">Stock Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">User:</label>
          <select
            className="w-full border p-2 rounded"
            value={formData.user}
            onChange={(e) => setFormData({ ...formData, user: e.target.value })}
          >
            <option value="">Select User</option>
            <option value="User1">User 1</option>
            <option value="User2">User 2</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Location:</label>
          <select
            className="w-full border p-2 rounded"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          >
            <option value="">Select Location</option>
            <option value="Warehouse A">Warehouse A</option>
            <option value="Warehouse B">Warehouse B</option>
          </select>
        </div>

        <table className="w-full border-collapse border mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item</th>
              <th className="border p-2">Empty</th>
              <th className="border p-2">Full</th>
            </tr>
          </thead>
          <tbody>
            {formData.stock.map((row, index) => (
              <tr key={index}>
                <td className="border p-2">{row.item}</td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.empty}
                    onChange={(e) => handleInputChange(e, index, "empty")}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.full}
                    onChange={(e) => handleInputChange(e, index, "full")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
