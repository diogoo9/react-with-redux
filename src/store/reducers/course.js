const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: "Iniciando com react",
        lesson: [
          { id: 1, title: "Primeira Aula" },
          { id: 2, title: "Segunda Aula" },
          { id: 3, title: "Terceira Aula" },
          { id: 4, title: "Quarta Aula" },
          { id: 5, title: "Quinta Aula" },
        ],
      },
      {
        id: 2,
        title: "Redux",
        lesson: [
          { id: 1, title: "Primeira Aula" },
          { id: 2, title: "Segunda Aula" },
          { id: 3, title: "Terceira Aula" },
          { id: 4, title: "Quarta Aula" },
          { id: 5, title: "Quinta Aula" },
        ],
      },
    ],
  };
  
  // o reducer recebe sempre actions e alterações no stado
  export default function course(state = INITIAL_STATE, action) {
      if(action.type === "TOGGLE_LESSON"){
          return {
              ...state,
              activeLesson: action.lesson,
              activeModule: action.module
          }
      }
      return state;
  }