import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './ContactsListItem.module.css';
import actions from '../../../redux/phoneBook/phoneBook-actions';

const ContactListItem = ({ onDeleteContact, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={style.contactItem}>
          {name}: {number}
          <button
            className={style.buttonDel}
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </>
);

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
const findContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  if (filter) {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
  return allContacts;
};

const mapStateToProps = state => ({
  // contacts: state.contacts.ContactsReducer,
  contacts: findContact(
    state.contacts.ContactsReducer,
    state.contacts.FilterReducer,
  ),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
