import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react-native";
import CarD from "./Section";
import { SubCard } from "./Section";

const DATA = [
  {
    title: "Popular Near Places",
    data: [
      {
        place: "Miami",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Miami_-_florida.767.jpg",
        rating: "4",
      },
      {
        place: "Orlando",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Nibh tellus molestie nunc non blandit massa. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Imperdiet nulla malesuada pellentesque elit eget. Malesuada pellentesque elit eget gravida cum sociis natoque. Ac tincidunt vitae semper quis lectus. Aliquam etiam erat velit scelerisque in.",
        img: "https://cdn.britannica.com/07/201607-050-0B5774CB/Orlando-Florida-aerial-cityscape-towards-Eola-Lake.jpg",
        rating: "4",
      },
    ],
  },
];

jest.mock("expo-router");

describe("<CarD />", () => {
  beforeEach(() => {
    render(<CarD title={DATA[0].title} places={DATA[0].data} />);
  });

  it("has 2 child", () => {
    // console.log(screen.root.children[1]);
    expect(screen.root.children.length).toBe(2);
  });

  it("First Child is Text Component", () => {
    expect(screen.root.children[0].type.displayName).toBe("Text");
  });
});
