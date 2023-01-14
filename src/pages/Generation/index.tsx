import React, { useState } from 'react'
import { pokemonApi } from '../../features/api/pokemonApi'
import { Title, Button, Group, Flex, Box, Text } from '@mantine/core'
import { Link } from "react-router-dom";

const generations = [
    {
        id: 1,
        begin: 0,
        end: 151,
    },
    {
        id: 2,
        begin: 151,
        end: 251
    },
    {
        id: 3,
        begin: 251,
        end: 386
    },
    {
        id: 4,
        begin: 386,
        end: 493
    },
    {
        id: 5,
        begin: 493,
        end: 649
    },
    {
        id: 6,
        begin: 649,
        end: 721
    },
    {
        id: 7,
        begin: 721,
        end: 809
    },
    {
        id: 8,
        begin: 809,
        end: 905
    },
    {
        id: 9,
        begin: 905,
        end: 1008
    },
]

const Generation = () => {
    const [generation, setGeneration] =useState<{offset: number, limit: number}>({offset: 0, limit: 151})
    const {data} = pokemonApi.useGetAllQuery(generation)
  return (
    <>
    <Title>Generation</Title>
    <Group>
        {generations.map((gen) => (
            <Button 
                key={gen.id}
                onClick={() => setGeneration({offset: gen.begin, limit: gen.end - gen.begin})}
            >
                Generation {gen.id}
            </Button>
        ))}
    </Group>
    <p>{data?.results.length}</p>
    <Flex
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
        bg="#fffff"
        >
            {data?.results?.map((pokemon) => (
                <Box 
                    component={Link}
                    to={`/pokeInfo/${pokemon.name}`}
                    key={pokemon.name} 
                    sx={{borderRadius:"10px", border: "1px solid teal" ,padding:"0.5rem"}}
                >
                    <Box
                        sx={{
                            width: "200px",
                            height: "200px",
                            overflow: "hidden",
                        }}
                    >
                        <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} width={"100%"} height={`100%`} style={{ objectFit: "contain" }} />
                    </Box>
                    <Text align="center" tt="capitalize">
                        {pokemon.name}
                    </Text>
                </Box>
            ))}
        </Flex>
    </>

  )
}

export default Generation