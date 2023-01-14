import React from 'react'
import { useRoutes } from 'react-router'
import { useRouteError } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import PokeInfo from './PokeInfo'

const routes = [
    {
        path:"/",
        element:<Layout />,
        // 子路由
        children: [
            {index:true, element:<Home/>},
            {
                path:"pokeInfo/:id", 
                element: <PokeInfo />,
            },
        ]
    },
    
]


const RouterConfig = () => {
    const routerConfig = useRoutes(routes)
  return routerConfig
}

export default RouterConfig