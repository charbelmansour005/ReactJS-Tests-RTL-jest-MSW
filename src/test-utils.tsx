import { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { AppProviders } from "./providers/AppProviders"

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }

// this is how we test a provider
// eza 3enna provider men3arrefo hon
