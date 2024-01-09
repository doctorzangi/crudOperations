import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const nav = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const setUsers = (event) => {
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        name: name,
        email: email,
        phone: phone
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        nav('/table');
      });
  };

  return (
    <div>
      <form onSubmit={setUsers}>
        <p>ID</p>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <p>Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Email</p>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Phone</p>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
