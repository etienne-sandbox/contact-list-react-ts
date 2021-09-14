import React from "react";
import Contact from "./Contact";

export interface ContactItem {
  id: string;
  name: string;
  email?: string;
}

const App: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [contacts, setContacts] = React.useState<Array<ContactItem>>([
    {
      id: "3",
      name: "Paul",
      email: "paul@gmail.com",
    },
    {
      id: "1",
      name: "Alice",
    },
    {
      id: "2",
      name: "Bob",
      email: "bob@gmail.com",
    },
  ]);

  const sortedContact = [...contacts].sort((left, right) =>
    left.name.localeCompare(right.name)
  );

  return (
    <div className="app">
      <h1 className="title">Contacts</h1>
      <div className="contacts">
        {sortedContact.map((contact) => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              onDelete={() => {
                setContacts(contacts.filter((item) => item.id !== contact.id));
              }}
            />
          );
        })}
      </div>
      <div className="add">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button
          onClick={() => {
            const newContact: ContactItem = {
              id: randomShortId(),
              name: name,
              email,
            };
            const contactsCopy = [...contacts];
            contactsCopy.push(newContact);
            setContacts(contactsCopy);
            setName("");
            setEmail("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

/**
 * Return a short (5 chars) string ID
 */
function randomShortId(): string {
  return Math.random().toString(36).substring(7);
}

export default App;
