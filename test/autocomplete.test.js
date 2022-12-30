beforeEach(() => {
  document.querySelector("#target").innerHTML = "";
  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [
        { Title: "The Avengers" },
        { Title: "Avengers End Game" },
        { Title: "Thor" },
      ];
    },

    renderOption(movie) {
      return movie.Title;
    },
  });
});

it("Dropdown starts closed", () => {
  const dropdown = document.querySelector(".dropdown");

  expect(dropdown.className).not.to.include("is-active");
});

it("After Searching, dropdown opens up", async () => {
  const input = document.querySelector("input");
  input.value = "avengers";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const dropdown = document.querySelector(".dropdown");

  expect(dropdown.className).to.include("is-active");
});
