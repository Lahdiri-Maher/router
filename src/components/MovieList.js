import { v4 as uuidv4 } from "uuid";

const movieList = [
  {
    id: uuidv4(),
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. ",
    postURL:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
    rating: 9.0,
  },
  {
    id: uuidv4(),
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    postURL:
      "https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg",
    rating: 8.9,
  },
  {
    id: uuidv4(),
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    postURL:
      "https://img-4.linternaute.com/hjM5dgLFPajbUWUmTVDwLHOqt3c=/1240x/19547719906f480d80a7c0a77d93f6be/ccmcms-linternaute/127232.jpg",
    rating: 7.0,
  },
];

export default movieList;
