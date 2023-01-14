import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { MantineProvider, Text } from '@mantine/core';
import RouterConfig from './pages/RouterConfig';
import {BrowserRouter} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterConfig />
    </MantineProvider>
    </BrowserRouter>
  )
}

export default App
