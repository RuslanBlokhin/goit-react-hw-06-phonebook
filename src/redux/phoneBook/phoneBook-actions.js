/* eslint-disable import/no-anonymous-default-export */
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import types from './phoneBook-types';

const addContact = createAction(types.ADDCONTACT, ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction(types.DELETECONTACT);
const filterUpdate = createAction(types.CHANGEFILTER);

export default { addContact, deleteContact, filterUpdate };
