import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import MainVirtualizedComponent from "./MainVirtualizedComponent";
import items from "../../mocks/items";

const numberOfRenderedItems = 11;

afterEach(() => {
  cleanup();
});

describe("src/components/MainVirtualizedComponent/MainVirtualizedComponent", () => {
  it("should render virtualized list of items", () => {
    render(<MainVirtualizedComponent items={items} />);
    const virtualizedItems = screen.getAllByText(/Item number/);
    expect(virtualizedItems.length).toBe(numberOfRenderedItems);
  });

  it("should render nothing", () => {
    render(<MainVirtualizedComponent items={[]} />);
    const virtualizedItems = screen.queryAllByText(/Item number/);
    expect(virtualizedItems.length).toBe(0);
  });
});
