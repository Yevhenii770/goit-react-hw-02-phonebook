import { PropTypes } from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, number, name }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)} type="button">
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
