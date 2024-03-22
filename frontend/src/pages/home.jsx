import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: 0, description: '' });

  const getAllList = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/items');
      setList(resp.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createItem = async () => {
    try {
      const parsedPrice = parseInt(formData.price);
      const dataToSend = { ...formData, price: parsedPrice };
      await axios.post('http://localhost:3000/items', dataToSend);
      setFormData({ name: '', price: 0, description: '' });
      getAllList();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const updateItem = async (id) => {
    try {
      const parsedPrice = parseInt(formData.price);
      const dataToSend = { ...formData, price: parsedPrice };
      await axios.patch(`http://localhost:3000/items/${id}`, dataToSend);
      setFormData({ name: '', price: '', description: '' });
      getAllList();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`);
      getAllList();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">List of Items</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem();
        }}
        className="mb-8"
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Item</button>
      </form>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {list.map(({ _id, name, price, description }) => (
            <tr key={_id}>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => deleteItem(_id)} className="text-red-500 mr-2">Delete</button>
                <button onClick={() => updateItem(_id)} className="text-blue-500">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
