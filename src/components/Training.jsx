import { useState } from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Training({ inputDatatoParent }) {


  const [count, setCount] = useState(0);
  const [inputValueChild, setInputValueChild] = useState("Default value");
  const isLoggedIn = true; // Example state, can be passed as a prop
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "Nathan", role: "Web Developer" },
    { id: 2, name: "John", role: "Web Designer" },
    { id: 3, name: "Jane", role: "Team Leader" },
  ];
  const [title, setTitle] = useState("Default title");
  const [finalCustomerData, setFinalCustomerData] = useState([]);
  useEffect(() => {
    getCustomerData();
    getData();
  }, []);
  const getCustomerData = async () => {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const finalCustomerData = await userResponse?.json();
    console.log("finalCustomerData", finalCustomerData);
    setFinalCustomerData(finalCustomerData);
  };

  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    setTitle(data.title);
  };
  const newEmails = 2;
  const inlineStyle = {
    fontSize: "20px",
    backgroundColor: "pink",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleInputChange = (e) => {
    if (inputDatatoParent) {
      inputDatatoParent(inputValueChild);
    }
  };
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userEmail || !userPassword || !userConfirmPassword) {
      setFormError("All fields are required.");
      return;
    }
    if (userPassword !== userConfirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }
    setFormError("");
    alert(`User ${userName} registered successfully!`);
    setFormSuccess("User registered successfully!");
    const formData = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      userConfirmPassword: userConfirmPassword,
    };
    console.log(formData);
    setUserName("");
    setUserEmail("");
    setUserPassword("");
    setUserConfirmPassword("");
    setFormSuccess("");
    navigate("/teams", { state: { formData } });
  };
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCustomers = finalCustomerData.filter(customer => {
    const search = searchTerm.toLowerCase();
    return (
      customer.name.toLowerCase().includes(search) ||
      customer.email.toLowerCase().includes(search) ||
      customer.phone.toLowerCase().includes(search) ||
      customer.website.toLowerCase().includes(search) ||
      customer.company.name.toLowerCase().includes(search) ||
      customer.address.street.toLowerCase().includes(search)
    );
  });
  return (
    <div className="training-wrapper">
      <div className="training-container py-4">
        <hr />
        <div className="py-4">
          <label className="text-xl font-bold mb-2">
            Send Data to Parent Component
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={inputValueChild}
            onChange={(e) => setInputValueChild(e.target.value)}
          />
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 my-5 px-4 rounded "
            onClick={handleInputChange}
          >
            Send to Parent
          </button>
          <p className="text-gray-600">
            This component allows you to send data to the parent component.
          </p>
        </div>
        <hr />
      </div>
      <div className="training-container py-4">
        <h1 className="text-2xl font-bold my-3">
          Increment / Decrement Component
        </h1>
        <p className="mb-4">Current Count: {count}</p>
        <p>This component allows you to increment or decrement a value.</p>
        <div className="increment-decrement py-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
      <hr />
      <div className="training-container py-4">
        <h1 className="text-2xl font-bold my-3">Conditional rendering</h1>
        <p>
          This section demonstrates how to conditionally render components in
          React.
        </p>
        <p className="mb-4">The current count is: {count}</p>
        <div className="conditional-rendering-example my-5">
          {count >= 0 ? (
            <p className="text-green-500">The count is positive.</p>
          ) : (
            <p className="text-red-500">The count is zero or negative.</p>
          )}
        </div>
        <hr />
        {newEmails > 0 && (
          <h2 className="text-2xl font-bold my-3">
            You have {newEmails} new emails in your inbox.
          </h2>
        )}

        <h3 className="text-xl font-bold my-3">
          Conditional Rendering Example
        </h3>
        <code>{`show the User Details table below -  {isLoggedIn && <UserList />}`}</code>
        {isLoggedIn && <UserList />}
      </div>
      <hr />
      <div className="training-container py-4">
        <h1 className="text-2xl font-bold my-3">List Rendering</h1>
        <p>This section demonstrates how to render a list of items in React.</p>
        <ul className="list-disc pl-5">
          {users.map((userlist, index) => (
            <li key={index} className="my-2">
              <span onClick={() => console.log(index)}>
                {userlist?.id} {userlist?.name} - {userlist?.role}{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="training-container py-4">
        <h2 className="text-2xl font-bold my-3">CSS Styling</h2>
        <p>This section demonstrates how to apply CSS styles in React.</p>
        <p className="text-gray-600">
          You can use inline styles, CSS classes, or CSS-in-JS libraries.
        </p>

        <p className="text-2xl font-bold" style={{ color: "orange" }}>
          inline style with Orange color
        </p>
        <p
          style={{ textAlign: "center", fontSize: "30px", fontFamily: "Arial" }}
        >
          inline style with text align/size/family{" "}
        </p>
        <p style={{ ...inlineStyle, color: "blue" }}>
          {" "}
          spread operator with ...inlineStyle and color: 'blue'.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Tailwind css class
        </button>
        <hr />
      </div>
      <div className="training-container py-4">
        <h2 className="text-2xl font-bold my-3">React Forms</h2>
        <p>This section demonstrates how to work with forms in React.</p>
        <form onSubmit={handleFormSubmit} className="w-full max-w-sm my-5">
          <div className="mb-4">
            <label htmlFor="UserName">User Name</label>
            <input
              type="text"
              id="userName"
              className="border p-2 rounded w-full my-2"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail">User Email</label>
            <input
              type="email"
              id="userEmail"
              className="border p-2 rounded w-full my-2"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userPassword">User Password</label>
            <input
              type="password"
              id="userPassword"
              className="border p-2 rounded w-full my-2"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userConfirmPassword">Confirm Password</label>
            <input
              type="password"
              id="userConfirmPassword"
              className="border p-2 rounded w-full my-2"
              value={userConfirmPassword}
              onChange={(e) => setUserConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          {formError && <p className="text-red-500 mt-2">{formError}</p>}
          {formSuccess && <p className="text-green-500 mt-2">{formSuccess}</p>}
        </form>
        <hr />
      </div>
      <div className="training-container py-4">
        <h2 className="text-2xl font-bold my-3">
          The useEffect Hook Fetch Data from API
        </h2>
        <h3 className="text-xl font-bold my-3">
          Title From External API: {title}
        </h3>
        <p>This section demonstrates how to use the useEffect hook in React.</p>
        <h3 className="text-xl font-bold my-3">
          Customer Data From External API: {finalCustomerData?.length}
        </h3>
        <div className="form-container">
          <form className="w-full max-w-sm my-5">
            <div className="mb-4">
              <input
                type="text"
                id="userName"
                className="border p-2 rounded w-full my-2"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search here..."
              />
            </div>
          </form>
        </div>
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Name
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Email
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Phone
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Website
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Company
              </th>
              <th className="px-4 py-2 border-b text-left font-semibold">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers?.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No data available.
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2 border-b">{customer.name}</td>
                  <td className="px-4 py-2 border-b">{customer.email}</td>
                  <td className="px-4 py-2 border-b">{customer.phone}</td>
                  <td className="px-4 py-2 border-b">{customer.website}</td>
                  <td className="px-4 py-2 border-b">
                    {customer.company.name}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {customer.address.street}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="training-container py-4">
        <h2 className="text-2xl font-bold my-3">Need to Learn</h2>
        <code className="text-gray-800">
          props, state, rest operator, spread operator, filter, map, reduce, useEffect, fetch data from API, form handling, conditional rendering, list rendering, CSS Styling,  lifecycle methods, hooks, context API, and more.
        </code>
        <p>
          {" "}
          React props are used to pass data from parent to child components.
        </p>
      </div>
    </div>
  );
}

export default Training;
