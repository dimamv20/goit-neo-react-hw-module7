import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsOps'


const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;