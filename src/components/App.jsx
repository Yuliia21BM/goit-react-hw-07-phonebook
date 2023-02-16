import { ToastContainer } from 'react-toastify';

import { Box } from './Box';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  return (
    <Box p="10px">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Box>
  );
};
