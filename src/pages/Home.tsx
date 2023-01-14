import { Link } from 'react-router-dom'
import { Flex, Box, Group, Button, Container, Text } from '@mantine/core';
import { pokemonApi } from "../features/api/pokemonApi"
import { selectPokemonList,previousPage, nextPage } from '../features/slices/pokemonListSlice';
import {useSelector, useDispatch} from "react-redux"

const Home = () => {
    const pokemonList = useSelector(selectPokemonList)
    const {data} = pokemonApi.useGetAllQuery({offset:pokemonList.offset, limit:pokemonList.limit})
    const dispatch = useDispatch()
    const handlePreviousPage = () => dispatch(previousPage())
    const handleNextPage = () => dispatch(nextPage())
    return (
        <>
        <Container>
        <Group my={"lg"}>
            <Button onClick={handlePreviousPage}>Previous Page</Button>
            <Button onClick={handleNextPage}>Next Page</Button>
        </Group>
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
        </Container>
        </>
    )
}

export default Home