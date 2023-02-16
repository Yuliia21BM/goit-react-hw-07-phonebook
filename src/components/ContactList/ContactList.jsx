import { useDispatch, useSelector } from 'react-redux';
import { getTextFilter, getContacts } from '../redux/selectors';
import { deleteContact } from 'components/redux/contactsSlice';

import { ContactsList, ContactItem, DeleteBtn } from './ContactList.styled';

const getFilteredContacts = (contacts, filterValue) => {
  if (filterValue === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);
  const filterValue = useSelector(getTextFilter);

  const visibleContacts = getFilteredContacts(allContacts, filterValue);

  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <span>&#128241;</span>
            {name} : {number}
            <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};
