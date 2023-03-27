// we need to mock restAPIs

import { rest } from "msw"
import { expectedData } from "./data"

export const handlers = [
  rest.get("http://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(expectedData))
  }),
]
