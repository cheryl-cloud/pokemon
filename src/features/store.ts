import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./api/pokemonApi";
import pokemonListSlice from "./slices/pokemonListSlice";

const store = configureStore({
    // 調節器
    reducer: {
        pokemonList: pokemonListSlice,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export default store;