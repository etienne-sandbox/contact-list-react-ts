import React from 'react';
import { ContactItem } from './types';

interface Props {
  contact: ContactItem;
  onDelete: () => void;
}

const Contact: React.FC<Props> = ({ contact, onDelete }) => {
  return (
    <div className="contact">
      <div className="infos">
        <h2>{contact.name}</h2>
        {contact.email && <p>{contact.email}</p>}
      </div>
      <button className="remove" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
