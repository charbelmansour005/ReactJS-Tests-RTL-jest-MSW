import { render, screen } from "@testing-library/react"
import GreetV2 from "./GreetV2"

describe("GreetV2", () => {
  test("renders correctly", () => {
    render(<GreetV2 />)
    // render(<GreetV2 />) there would be an underline here under GreetV2 & to fix it add '?' to type name in GreetV2.tsx
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
  })
})

describe("By side", () => {
  test("renders with a name", () => {
    render(<GreetV2 name={"Charbel"} />)
    const textElement = screen.getByText("Hello Charbel")
    expect(textElement).toBeInTheDocument()
  })
})
