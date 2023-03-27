import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import TestThis from "./TestThis"

describe("TestThis CMP", () => {
  test("should render cmp", () => {
    render(<TestThis data={""} />)
  })

  test("should execute function", async () => {
    user.setup()
    const handleFetchData = jest.fn()
    render(<TestThis data={""} handleFetchData={handleFetchData} />)
    const buttonElement = screen.getByRole("button", { name: "fetch data" })
    expect(buttonElement).toBeInTheDocument()
    await user.click(buttonElement)
    expect(handleFetchData).toHaveBeenCalledTimes(1)
  })
})
