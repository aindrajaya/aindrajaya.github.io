import { render, screen } from "@testing-library/react";
import Page from "../pages";

describe("Homepage test", () => {
  const PageComponent = render(<Page/>)
  it("The page object was there", () => {
    expect(PageComponent).toEqual(expect.any(Object))
  })
  // it("component can be rendered", () => {
  //   const {component} = render(<Page />)
  //   expect(component).toBeTruthy();
  // })
  // it("shows my name on it", () => {
  //   const myName = screen.getByText(/Web3/i);
  //   expect(myName).toBeInTheDocument()
  // })
})