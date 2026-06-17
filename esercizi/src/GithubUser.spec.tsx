import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { GithubUser } from "./GithubUser";

describe("GithubUser", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders github user data", async () => {
    const fakeUser = {
      name: "The Octocat",
      login: "octocat",
      avatar_url: "https://github.com/octocat.png",
    };

    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      json: vi.fn().mockResolvedValue(fakeUser),
    } as any);

    render(<GithubUser username="octocat" />);

    expect(
      await screen.findByText("The Octocat")
    ).toBeInTheDocument();

    expect(
      screen.getByText("octocat")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: "octocat" })
    ).toHaveAttribute(
      "src",
      "https://github.com/octocat.png"
    );
  });
});