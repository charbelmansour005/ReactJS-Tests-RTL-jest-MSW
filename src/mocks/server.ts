// * populating the file w/ code that creates a server

// src/mocks/server.js
import { setupServer } from "msw/node"
import { handlers } from "./handlers"

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
