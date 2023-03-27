// * getBy -> exists
// * queryBy -> only exists when state is true
// * findBy -> settimeout, make it true & check if it's found

import { render, screen, logRoles } from "@testing-library/react"
import { Skills } from "./skills"

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"]
  // insuring the list is present in the DOM
  test("should render correctly", () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />)
    const listItemElement = screen.getAllByTestId("my-list")
    expect(listItemElement).toHaveLength(skills.length) //-> best practice
    // expect(listItemElement).toHaveLength(3) - bad
  })

  test("should render login btn", () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole("button", {
      name: "Login",
    })
    expect(loginButton).toBeInTheDocument()
  })

  test("should NOT render Start learning btn", () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  // wait for logged in state to become true
  // then check if start learning button shows
  test("Start learning button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    const startLearningButton = await screen.findByRole(
      //this also works with findByTestId
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
