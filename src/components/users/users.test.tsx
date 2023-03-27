import { screen, render } from "@testing-library/react"
import Users from "./users"
import { server } from "../../mocks/server"
import { rest } from "msw"
import { expectedData } from "../../mocks/data"

// we need to mock because tests happen a lot & might get charged $ for requests
// * msw intercepts requests
describe("Users", () => {
  test("renders corr", () => {
    render(<Users />)
    const textElement = screen.getByRole("heading", { level: 1, name: "Users" })
    expect(textElement).toBeInTheDocument()
  })

  test("renders a list of users", async () => {
    render(<Users />)
    const users = await screen.findAllByRole("listitem")
    expect(users).toHaveLength(expectedData.length)
  })

  test("renders error", async () => {
    server.use(
      rest.get("http://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    render(<Users />)
    const error = await screen.findByText("Error fetching users")
    expect(error).toBeInTheDocument()
  })
})
