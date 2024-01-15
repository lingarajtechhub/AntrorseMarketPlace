
const ProfilePage = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    orders: [
      { id: 1, date: '2022-01-01', total: 50.0 },
      { id: 2, date: '2022-02-01', total: 75.0 },
      // Add more orders as needed
    ],
    addresses: [
      { id: 1, label: 'Home', address: '123 Main St, City, Country', isDefault: true },
      { id: 2, label: 'Work', address: '456 Business Ave, City, Country', isDefault: false },
      // Add more addresses as needed
    ],
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">My Profile</h2>

      {/* User Information */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">User Information</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>

      {/* Order History */}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Order History</h3>
        <ul>
          {user.orders.map((order) => (
            <li key={order.id} className="mb-2">
              Order #{order.id} - Date: {order.date}, Total: ${order.total.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      {/* Saved Addresses */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-2">Saved Addresses</h3>
        <ul>
          {user.addresses.map((address) => (
            <li key={address.id} className="mb-2">
              {address.label} - {address.address} {address.isDefault && '(Default)'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
