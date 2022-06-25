import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {

  return (
   <>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
   </>
  )
}

export default App
