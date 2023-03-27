import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"
import { Counter } from "./counter"

describe("Counter", () => {
  test("should render correctly", () => {
    render(<Counter />)
    //1
    const countElement = screen.getByRole("heading", {
      level: 1,
    })
    expect(countElement).toBeInTheDocument()
    //2
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test("renders a count of 0", () => {
    render(<Counter />)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("0")
  })

  // * user interactions start

  test("renders a count of 1 after clicking the increment button", async () => {
    // * user.setup() before render method ->
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    })
    await user.click(incrementButton)
    const countElement = screen.getByRole("heading", {
      level: 1,
    })
    expect(countElement).toHaveTextContent("1")
  })

  test("renders a count of 2 after clicking the increment button twice", async () => {
    // * user.setup() before render method ->
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    })
    // await user.dblClick(incrementButton) -> less accurate
    await user.click(incrementButton) // -> more accurate
    await user.click(incrementButton) // -> more accurate
    const countElement = screen.getByRole("heading", {
      level: 1,
    })
    expect(countElement).toHaveTextContent("2")
  })

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup()
    render(<Counter />)
    const inputElement = screen.getByRole("spinbutton")
    await user.type(inputElement, "10")
    const setCountButton = screen.getByRole("button", {
      name: "Set",
    })
    await user.click(setCountButton)
    const countHeader = screen.getByRole("heading", {
      level: 1,
    })
    expect(countHeader).toHaveTextContent("10")
  })

  test("elements are focused in the right order", async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole("spinbutton")
    const setButton = screen.getByRole("button", { name: "Set" })
    const incrementButton = screen.getByRole("button", { name: "Increment" })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
