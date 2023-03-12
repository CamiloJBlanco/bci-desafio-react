import { configureStore, createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: [],
  },
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

const store = configureStore({
  reducer: pokemonSlice.reducer,
});

export const { setPokemon } = pokemonSlice.actions;

export default store;
