import React from 'react'
import { Header, Text , Button, Group } from '@mantine/core';
import {Link} from "react-router-dom"

const HeaderLayout = () => {
  return (
    <Header height={60} p="xs" sx={{backgroundColor:'#FFCB05'}}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}> */}
          {/* <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          /> */}
        {/* </MediaQuery> */}
        <Group position="apart" mx="lg" w="100%">
        <Text component='a' href='/' fz="xl" fw="bold">Pokemon Center</Text>
        <Group>
        {/* <Button radius="xl" uppercase component={Link} to="/list">List</Button> */}
        <Button radius="xl" uppercase component={Link} to="/search">search</Button>
        <Button radius="xl" uppercase component={Link} to="/generation">Generation</Button>
        </Group>
        </Group>


      </div>
    </Header>
  )
}

export default HeaderLayout