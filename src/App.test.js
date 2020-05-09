import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./components/user";
import NotFoundPage from "./components/notfoundpage";
import App from "./App";

describe("Unit tests for React Component Routing ", () => {
  test("invalid path should redirect to 404", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(User)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });

  test("should redirect to User page and Greet the User", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/user/Raghu"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(User)).toHaveLength(1);
    expect(wrapper.find("h2").text()).toEqual("Hello, Raghu");
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });

  let root = null;
  beforeEach(() => {
    root = document.createElement("div");
    document.body.appendChild(root);
  });

  it("should navigate to Postcode page when you click the Add postcode button", (async) => {
    // Render app
    render(
      <MemoryRouter initialEntries={["/user/Raghu"]}>
        <App />
      </MemoryRouter>,
      root
    );
    // Interact with page
    act(() => {
      // Find the link
      const postcodeLink = document.querySelector(
        "a[href='/user/Raghu/postcode']"
      );
      // Click it
      postcodeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    // Check correct page content showed up
    expect(document.querySelector("h2").textContent).toBe(
      "Hello! This is Postcode Page"
    );
    async();
  });

  it("should navigate to Change name page when you click the Changename button", (async) => {
    // Render app
    render(
      <MemoryRouter initialEntries={["/user/Raghu"]}>
        <App />
      </MemoryRouter>,
      root
    );
    // Interact with page
    act(() => {
      // Find the link
      const changenameLink = document.querySelector(
        "a[href='/user/Raghu/change-nameroute']"
      );
      // Click it
      changenameLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    // Check correct page content showed up
    expect(document.querySelector("h2").textContent).toBe(
      "Hello! This is Changename page"
    );
    async();
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(root);
    root.remove();
    root = null;
  });
});
