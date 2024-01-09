import React, { useState, useEffect } from 'react';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [username, setUserName] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  const addUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website,
        company: company,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(newUser => {
        setUsers([...users, newUser]); 
        setId('');
        setName('');
        setUserName('');
        setEmail('');
        setPhone('');
        setWebsite('');
        setCompany('');
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <p>ID</p>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <p>Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Username</p>
        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
        <p>Email</p>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Phone</p>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <p>Website</p>
        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
        <p>Company</p>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Table;
