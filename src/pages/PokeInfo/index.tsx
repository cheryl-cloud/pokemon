import React from 'react'
import { useParams } from 'react-router-dom'
import { pokemonApi } from '../../features/api/pokemonApi'
import { Text, Image, SimpleGrid, Container, Title, Stack, Box } from '@mantine/core'

const PokeInfo = () => {
    const { id } = useParams()
    const { data } = pokemonApi.useGetByIdQuery(id||"")
    if (!data) return <Box>pokemon not found</Box>
    return (
        <>
        <Container>
            <Title order={3} tt="capitalize" >Pokemon Info</Title>
            <Stack 
                my={"lg"}
                sx={{
                    backgroundColor:"#FFCB05",
                    boderButtom:"1px solid black",
                    borderRadius:"10px",
                    padding: "1rem",
                    boxShadow: "5px 5px 0px black"
                }}
            >
                <Text tt="capitalize">Pokemon Name：{id}</Text>
                <Text tt="capitalize">Pokemon ID：{data?.id}</Text>
                <Text>{`Pokemon Weight： ${data?.weight} kg`}</Text>
                <Text>{`Pokemon Height： ${data?.height} cm`}</Text>
            </Stack>
            <SimpleGrid 
                cols={2} 
                sx={{
                    backgroundColor:"#228BE6",
                    borderRadius:"10px",
                    padding: "1rem",
                    boxShadow: "5px 5px 0px black"
                    }}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'md' },
                    // { maxWidth: 755, cols: 2, spacing: 'sm' },
                    { maxWidth: 600, cols: 1, spacing: 'sm' },
                    ]}    
                >

                <Stack align="center">
                    <Text color={"white"} fw={"bold"}>Front Default</Text>
                    {data.sprites.front_default !== null ? (
                        <Box sx={{
                            width: "300px",
                            backgroundColor:"#75b1e6",
                            borderRadius: "10px"
                        }}>
                            <Image src={data?.sprites.front_default}/>
                        </Box>
                    ) : (
                        <Text>Sorry Not Found</Text>
                    )}
                </Stack>
                <Stack align="center">
                    <Text align='center' color={"white"} fw={"bold"}>Back Default</Text>
                    {data.sprites.back_default !== null ? (
                        <Box sx={{
                            width: "300px",
                            backgroundColor:"#75b1e6",
                            borderRadius: "10px"
                        }}>
                            <Image src={data?.sprites.back_default} />
                        </Box>
                    ) : (
                    <Text>Sorry Not Found</Text>)}
                </Stack>
                <Stack align="center">
                    <Text align='center' color={"white"} fw={"bold"}>Back Shiny</Text>
                    {data.sprites.back_shiny !== null ? (
                        <Box sx={{
                            width: "300px",
                            backgroundColor:"#75b1e6",
                            borderRadius: "10px"
                        }}>
                            <Image src={data?.sprites.back_shiny} />
                        </Box>
                    ) : (
                    <Text>Sorry Not Found</Text>)}
                </Stack>
                <Stack align="center">
                    <Text align='center' color={"white"} fw={"bold"}>Front Shiny</Text>
                    {data.sprites.front_shiny !== null ? (
                        <Box sx={{
                            width: "300px",
                            backgroundColor:"#75b1e6",
                            borderRadius: "10px"
                        }}>
                            <Image src={data?.sprites.front_shiny}></Image>
                        </Box>
                    ) : (
                    <Text>Sorry Not Found</Text>)}
                </Stack>
            </SimpleGrid>
            </Container>
        </>

    )
}

export default PokeInfo