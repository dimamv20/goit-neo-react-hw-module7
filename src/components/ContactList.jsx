import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';
import { selectFilteredContacts } from '../redux/contactsSlice';


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  console.log('Filtered Contacts:', filteredContacts); 

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul >
      {filteredContacts.map((contact) => (
        <li key={contact.id} >
          {contact.name}: {contact.numbers || 'No phone number available'}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
