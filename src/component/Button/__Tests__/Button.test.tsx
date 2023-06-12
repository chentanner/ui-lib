import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Button from '../Button';
import setupFetchStub from './mockFetch';

describe("Button", () => {

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(setupFetchStub);
  })

  afterEach(() => {
    jest.restoreAllMocks()
  });

  it("renders the button component", () => {
    render(<Button label='Hi' />);
  });
  it("has the button label", () => {
    const buttonName: string = 'Hi'
    render(<Button label={buttonName} />);
    expect(screen.getByRole("button", { name: buttonName })).toBeTruthy;
    expect(screen.getByRole("button", { name: buttonName }));
  });
  it("has the mock api label", async () => {
    const buttonName: string = 'pixel4'
    const { getByText } = await render(<Button label={'somethingelse'} api='https://dummyjson.com/products/1' />);

    const labelAfterGet = await waitFor(() => getByText(buttonName));
    expect(labelAfterGet).not.toBeNull();
  });
});

describe("Button with API", () => {
  it("has the api label", async () => {
    const buttonName: string = 'iPhone 9'
    const { getByText } = await render(<Button label={'somethingelse'} api='https://dummyjson.com/products/1' />);

    const labelAfterGet = await waitFor(() => getByText(buttonName));
    expect(labelAfterGet).not.toBeNull();
  });
});
