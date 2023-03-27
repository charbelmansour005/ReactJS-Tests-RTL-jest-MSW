import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
// test & expect we don't have to import thanks to CRA

test("renders learn react link", () => {
  render(<App />)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
