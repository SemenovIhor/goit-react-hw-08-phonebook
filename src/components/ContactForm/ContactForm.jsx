import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';

import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isInContacts = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      toast.info(`${name} is already in contacts.`);
      return;
    }

    const newContact = { name, number };

    const action = addNewContact(newContact);
    dispatch(action);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label}>
        Name
        <input
          value={name}
          className={css.form__input}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Ihor Semenov"
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          value={number}
          className={css.form__input}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="906-0402-0402"
        />
      </label>
      <button className={css.input__button} type="submit">
        Add contact
      </button>
    </form>
  );
}
