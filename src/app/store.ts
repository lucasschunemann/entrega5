import { configureStore } from '@reduxjs/toolkit';
import contactsReducer, { Contact } from '../features/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// Inferência dos tipos RootState e AppDispatch da própria store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Exportação do tipo Contact para uso em outros lugares se necessário
export type { Contact };
