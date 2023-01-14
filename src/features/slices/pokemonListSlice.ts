
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface PokemonPageState {
    offset: number,
    limit: number,
}

const initialState: PokemonPageState = {
    offset: 0,
    limit: 20,
}

const pokemonListSlice = createSlice({
    name: "pokemonlist",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.offset += state.limit
            return state;
        },
        previousPage: (state) => {
            state.offset -= state.limit
            return state;
        }
    }
})

export const {nextPage, previousPage} = pokemonListSlice.actions

export const selectPokemonList = (state: RootState) => state.pokemonList

export default pokemonListSlice.reducer;