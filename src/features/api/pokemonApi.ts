import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { PokemonData } from "../../typings";
export interface PokemonFromList {
    name: string,
    url: string,
}
export interface Pokemon {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonFromList[],
}

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
    tagTypes: ["Pokemons", "PokemonId"],
    endpoints: (builder) => ({
        // <PokemonList>是Api第一個回傳的type
        // 第二個參數{offset:number; limit: number}是Api代入參數的argument
        getAll: builder.query<Pokemon, { offset: number; limit: number }>({
            query: ({ offset, limit }) => `pokemon/?offset=${offset}&limit=${limit}`,
            providesTags: [{ type: "Pokemons", id: "List" }]
        }),
        getById: builder.query<PokemonData, string>({
            query: (id) => `pokemon/${id}`,
            providesTags:[{type:"PokemonId", id:"Info"}] 
        })
    })
})

export const { useGetAllQuery, useGetByIdQuery } = pokemonApi


