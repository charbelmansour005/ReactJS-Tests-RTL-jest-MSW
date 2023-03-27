import { screen, render } from "../../test-utils"
import { MuiMode } from "./mui-mode"

describe("MuiMode", () => {
  test("should render text correctly", () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole("heading", {
      level: 1,
    })
    expect(headingElement).toHaveTextContent("dark mode")
  })
})
