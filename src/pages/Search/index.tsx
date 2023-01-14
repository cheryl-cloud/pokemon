import React from 'react'
import { Title, TextInput, Button, Stack, Text, SimpleGrid, Box, Image } from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import { pokemonApi } from '../../features/api/pokemonApi';

const Search = () => {
    const {control, handleSubmit, getValues } = useForm({
        defaultValues: {
            search:""
        }
    });
    const {data,refetch} = pokemonApi.useGetByIdQuery(getValues("search"))
    const onSubmit = handleSubmit((data) => {
        refetch()
    });
    console.log(data);
    
  return (
    <>
    <Title>Search Pokemon Id</Title>
    <form onSubmit={onSubmit}>
        <Controller
          control={control}
          name="search"
          render={({field}) => (
            <TextInput

                label="search"
                {...field} />
          )}
        />
      <Button my={"md"} radius="xl" uppercase type="submit">Submit</Button>
    </form>
    {data?.id ? (
        <>
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
                <Text tt="capitalize">Pokemon Name：{data.name}</Text>
                <Text tt="capitalize">Pokemon ID：{data.id}</Text>
                <Text>{`Pokemon Weight： ${data.weight}`}</Text>
                <Text>{`Pokemon Height： ${data.height}`}</Text>
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
                            <Image src={data.sprites.front_default}/>
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
                            <Image src={data.sprites.back_default} />
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
                            <Image src={data.sprites.back_shiny} />
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
                            <Image src={data.sprites.front_shiny}></Image>
                        </Box>
                    ) : (
                    <Text>Sorry Not Found</Text>)}
                </Stack>
            </SimpleGrid>
            </>
    ):(<Text>no found</Text>)}

    </>
  )
}

export default Search