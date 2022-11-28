import { UserRouter, CharacterRouter, FilmRouter, GenreRouter } from "../components";

// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [
  // ["/test", TestRouter],
  ["/auth", UserRouter],
  ["/characters", CharacterRouter],
  ["/movies", FilmRouter],
  ["/generos", GenreRouter],
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
