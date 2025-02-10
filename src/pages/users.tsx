import axios from "axios";
import { useEffect, useState } from "react";
interface UserDetails {
  id: number;
  email: string;
  phone: number;
  password: string;
  address: {
    city: string;
    street: string;
    number: number;

    zipcode: string;
  };
  name: {
    fisrstname: string;
    lastname: string;
  };
}
function Users() {
  const [user, setUser] = useState<UserDetails[]>([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")

      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-amber-50">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th>id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {/* {user.map(userData) =>{
            <tr key={userData.id}>
                <td>user</td>
           }}; */}

          {user.map((userData) => (
            <tr key={userData.id}>
              <td className="border p-2">{userData.id}</td>
              <td className="border p-2">
                {" "}
                {userData.name.fisrstname} {userData.name.lastname}
              </td>
              <td className="border p-2">{userData.email}</td>
              <td className="border p-2">{userData.password}</td>

              <td className="border p-2">{userData.phone}</td>
              <td className="border p-2">{userData.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// interface UserDetails {
//   id: number;
//   email: string;
//   username: string;
//   password: string;
//   name: {
//     firstname: string;
//     lastname: string;
//   };
//   phone: string;
//   address: {
//     city: string;
//     street: string;
//     number: number;
//     zipcode: string;
//   };
// }

// function Users() {
//   const [user, setUser] = useState<UserDetails[]>([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/users")
//       .then((res) => {
//         setUser(res.data);
//         console.log(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="bg-amber-50">
//       <table className="table-auto w-full border-collapse border border-gray-200">
//         <thead>
//           <tr>
//             <th className="border p-2">ID</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Username</th>
//             <th className="border p-2">Phone</th>
//             <th className="border p-2">City</th>
//             <th className="border p-2">Street</th>
//             <th className="border p-2">Zipcode</th>
//           </tr>
//         </thead>
//         <tbody>
//           {user.map((userData) => (
//             <tr key={userData.id}>
//               <td className="border p-2">{userData.id}</td>
//               <td className="border p-2">
//                 {userData.name.firstname} {userData.name.lastname}
//               </td>
//               <td className="border p-2">{userData.email}</td>
//               <td className="border p-2">{userData.username}</td>
//               <td className="border p-2">{userData.phone}</td>
//               <td className="border p-2">{userData.address.city}</td>
//               <td className="border p-2">{userData.address.street}</td>
//               <td className="border p-2">{userData.address.zipcode}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Users;
