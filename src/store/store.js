import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: [],
    name: undefined,
    data: [],
    error: false,
    fetching: false,
    location: undefined,
    pokemonDetails: [],
    characteristics: [],
  },
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPokemonDetails: (state, action) => {
      state.pokemonDetails = action.payload;
    },
    setCharacteristics: (state, action) => {
      state.characteristics = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, pokemonSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const {
  setPokemon,
  setName,
  setData,
  setError,
  setFetching,
  setLocation,
  setPokemonDetails,
  setCharacteristics,
} = pokemonSlice.actions;
