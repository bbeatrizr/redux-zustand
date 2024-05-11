import { describe, expect, it } from "vitest";
import { player as reducer, play, next } from "./player";

const exampleState = {
  course: {
    modules: [
      {
        id: "1",
        title: "Iniciando com React",
        lessons: [
          {
            id: "W_ATsETujaY",
            title: "Componente: Sidebar",
            duration: "09:12",
          },
          {
            id: "8KBq2vhwbac",
            title: "Form de comentários",
            duration: "11:34",
          },
        ],
      },
      {
        id: "2",
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "h5JA3wfuW1k",
            title: "Interações no JSX",
            duration: "06:33",
          },
          {
            id: "1G0vSTqWELg",
            title: "Utilizando estado",
            duration: "09:12",
          },
        ],
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

describe("player slice", () => {
  it("should be able to play", () => {
    const state = reducer(exampleState, play([1, 2]));

    expect(state.currentLessonIndex).toEqual(2);
    expect(state.currentModuleIndex).toEqual(1);
  });

  it("should be able to play next video automatically", () => {
    const state = reducer(exampleState, next());

    expect(state.currentLessonIndex).toEqual(1);
    expect(state.currentModuleIndex).toEqual(0);
  });

  it("should be able to jump to the next module aotomatically", () => {
    const state = reducer({ ...exampleState, currentLessonIndex: 1 }, next());

    expect(state.currentLessonIndex).toEqual(0);
    expect(state.currentModuleIndex).toEqual(1);
  });

  it("should not uptade the corrent module and lesson index if there is no next lesson available", () => {
    const state = reducer(
      { ...exampleState, currentLessonIndex: 1, currentModuleIndex: 1 },
      next()
    );

    expect(state.currentLessonIndex).toEqual(1);
    expect(state.currentModuleIndex).toEqual(1);
  });
});
