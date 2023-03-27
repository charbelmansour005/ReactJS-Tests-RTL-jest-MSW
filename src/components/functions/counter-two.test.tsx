import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import CounterTwo from "./counterTwo"

describe("Counter Two", () => {
  test("should render heading", () => {
    render(<CounterTwo count={0} />)
    const headingCounter = screen.getByRole("heading", {
      level: 1,
    })
    expect(headingCounter).toBeInTheDocument()
  })

  test("handlers are called", async () => {
    user.setup()
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler} // we just pass above funcs
        handleDecrement={decrementHandler} // we just pass above funcs
      />
    )
    const incrementButton = screen.getByRole("button", { name: "Increment" })
    const decrementButton = screen.getByRole("button", { name: "Decrement" })
    await user.click(incrementButton)
    await user.click(decrementButton)
    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
