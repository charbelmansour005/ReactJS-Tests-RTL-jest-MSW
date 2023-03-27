import { Greet } from "./Greet"
import { render, screen } from "@testing-library/react"

test("Greet renders correctly", () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i) //text matches the regex & ignore the case
  //   const textElement = screen.getByText("Hello")
  expect(textElement).toBeInTheDocument()
})
