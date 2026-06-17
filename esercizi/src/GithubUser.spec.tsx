import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { GithubUser } from "./GithubUser";

describe("GithubUser", () => {
  it("renders github user data", async () => {
    const fakeUser = {
      name: "The Octocat",
      login: "octocat",
      avatar_url: "https://github.com/octocat.png",
    };

    vi.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve(fakeUser),
    } as any);

    render(<GithubUser username="octocat" />);

    expect(
      await screen.findByText("The Octocat")
    ).toBeInTheDocument();
  });
});