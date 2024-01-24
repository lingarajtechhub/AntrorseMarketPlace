
const MyProfilePage = () => {
  // Sample user data
  const user = {
    name: 'uprndra gupta',
    email: 'upendra.gupta@example.com',
    phone_number:7319961224,
    accountNumber:123456789456789,
    accountHolderName:"upendra Gupta",
    GST:"MP0410FG",
    
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
        <h3 className="text-xl font-semibold mb-2">personal Information</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>phone:{user.phone_number}</p>
      </div>

      {/* acccount details*/}
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Account Details</h3>
       <p>Account Number:{user.accountNumber}</p>
      
       <p>Account HolderName:{user.accountHolderName}</p>
       <p>GST:{user.GST}</p>
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
      {/* security question answer */}
      <div className="bg-white p-4 rounded-md shadow-md my-6 ">
        <h3 className="text-xl font-semibold mb-2">secret question & answer</h3>
       <p> Security questions:{}</p>
       
       <p>Secret answers:{}</p>
      </div>
    </div>
  );
};

export default MyProfilePage;
