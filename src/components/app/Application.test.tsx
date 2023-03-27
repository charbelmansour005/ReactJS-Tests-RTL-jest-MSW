import Application from "./Application"
import { render, screen } from "@testing-library/react"

describe("Application", () => {
  describe("Custom elements", () => {
    test("renders custom elements correctly", () => {
      render(<Application />)
      const customElement = screen.getByTestId("custom-element")
      expect(customElement).toBeInTheDocument()
    })
  })

  test("renders correctly", () => {
    render(<Application />)

    // const pageHeading = screen.getByRole("heading", {
    //   name: "Job application form",
    // }) // heading = h1 to h6 so error if we don't specify which heading we are testing by using 'name' or by using 'level'
    // // level 1 = h1, level 2 = h2 ...
    // expect(pageHeading).toBeInTheDocument()

    // const sectionHeading = screen.getByRole("heading", {
    //   name: "Section 1",
    // })
    // expect(sectionHeading).toBeInTheDocument()

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    }) // heading = h1 to h6 so error if we don't specify which heading we are testing by using 'name' or by using 'level'
    // level 1 = h1, level 2 = h2 ...
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const nameElement = screen.getByRole("textbox", {
      name: "Name", // we got "Name" from here:
      /**
       * we have to do this because we have 2 inputs (' 2 textbox roles')
       *
       * <label htmlFor="name">Name</label>
       * <input type={"text"} id="name" />
       *
       */
    }) // 'textbox' = default role of input element
    expect(nameElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole("combobox") // 'combobox' = default role of select element
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole("checkbox") // 'checkbox' = default role of input element as checkbox
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole("button") // 'button' = default role of button
    expect(submitButtonElement).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioElement).toBeInTheDocument()
  })
})
