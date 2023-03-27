import { render } from "@testing-library/react"
import { shoppingList } from "./List"
import ShoppingList from "./ShoppingList"

describe("ShoppingList", () => {
  test("the shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk")
    expect(new Set(shoppingList)).toContain("milk")
  })

  test("ShoppingList should render", () => {
    render(<ShoppingList />)
  })
})
