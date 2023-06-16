// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // {
  //   _id: "t7cZfWIp-q",
  //   firstName: "Abhishek  ",
  //   lastName: "",
  //   username: "@abhishek",
  //   password: "abhishek123",
  //   bio: "Be yourself!",
  //   bookmarks: [],
  //   avatarUrl:
  //     "https://pbs.twimg.com/profile_images/1648635693932122115/W12SFpGW_400x400.jpg",
  //   website: "https://abhishek-singh-rana.netlify.app/",
  //   createdAt: "2023-06-01T10:55:06+05:30",
  //   updatedAt: formatDate(),
  // },
  {
    _id: "79Gksh9otl",
    firstName: "John",
    lastName: "Doe",
    username: "@johndoe",
    password: "johndoe123",
    bio: "Hello World",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp",
    website: "https://google.com/",
    createdAt: "2023-06-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Jane",
    lastName: "Doe",
    username: "@janedoe",
    password: "janedoe123",
    bio: "Whats in bio?",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp",
    website: "https://abhishek-singh-rana.netlify.app/",
    createdAt: "2023-06-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Carl",
    lastName: "Smith",
    username: "@carlsmith",
    password: "carlsmith123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    website: "https://abhishek-singh-rana.netlify.app/",
    createdAt: "2023-06-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "t7cZfWIp-q",
    firstName: "Abhishek  ",
    lastName: "",
    username: "@abhishek",
    password: "abhishek123",
    bio: "Be yourself!",
    bookmarks: [],
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1648635693932122115/W12SFpGW_400x400.jpg",
    website: "https://abhishek-singh-rana.netlify.app/",
    createdAt: "2023-06-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "M1NR81Bzlz",
    firstName: "Alex",
    lastName: "Maxwell",
    username: "@alexmaxwell",
    password: "alexmaxwell123",
    bio: "What's up?",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
    website: "",
    createdAt: "2023-06-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "Sophia",
    lastName: "Jones",
    username: "@sophiajones",
    password: "sophiajones123",
    bio: "Frontend Engineer",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525510/socialmedia/avatars/sophia-jones.webp",
    website: "",
    createdAt: "2023-06-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];