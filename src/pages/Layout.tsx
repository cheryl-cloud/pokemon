import React from 'react'
import { AppShell, Navbar, Header } from '@mantine/core';
import HeaderLayout from '../components/HeaderLayout';
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <AppShell
      padding="md"
    //   navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<HeaderLayout />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
    <Outlet />
      {/* Your application here */}
    </AppShell>
  )
}

export default Layout