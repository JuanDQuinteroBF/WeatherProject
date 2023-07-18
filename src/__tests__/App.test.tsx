import { render } from "@testing-library/react";


describe("App", () => {
    test('App mounts properly', () => {
        const wrapper = render(<App />)
        expect(wrapper).toBeTruthy()
  
        // Get by h1
        const h1 = wrapper.container.querySelector('h1')
        expect(h1?.textContent).toBe('Hola')
      });
})


test('Renders main page conrrectly', () => {
    expect(true).toBeTruthy();
})