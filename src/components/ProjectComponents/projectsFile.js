import nyt from "../../assets/nyt.jfif";
import ghibli from "../../assets/ghibli.jpg";
import clock from "../../assets/clock.png";
import workout from "../../assets/workout.jpg";
import isaiah from "../../assets/react.jpg";
import mhw from "../../assets/mhw.jpg";
import pip from "../../assets/pip.png";
import scroll from "../../assets/scroll.png";
import quotes from "../../assets/quotes.png";
import sharingan from "../../assets/sharingan.png";
import note from "../../assets/notepad.png";
import sounds from "../../assets/sounds.png";
import LC from '../../assets/LC.png';
import journal from '../../assets/read-book.jpg';
import bookmark from '../../assets/bookmark.jpg';
import animation from '../../assets/animation.png';
import joke from '../../assets/joke.png';

const Projects = [
  {
    title: "Journal",
    description: "A React app to create and manage your own journal entries. Currently in version two! For version three, I plan to add filtering/search functionality, and a more dynamic layout for the journal display!",
    image: journal,
    page: "https://ism-journal-client.herokuapp.com/",
    client: "https://github.com/IsaiahMurray/Journal-Client",
    server: "https://github.com/IsaiahMurray/Journal-Server",
    tags: ["HTML/CSS", "React", "JavaScript", "Node", "PostgreSQL"],
    type: "JavaScript"
  },
  {
    title: "Ghibli API Fetch",
    description:
      "A simple fetch from the Studio Ghibli API to display a list of all of their movies",
    image: ghibli,
    repo: "https://github.com/IsaiahMurray/Stufio-Ghibli-API",
    page: "https://isaiahmurray.github.io/Studio-Ghibli-API/",
    tags: ["HTML/CSS", "JavaScript"],
    type: "JavaScript"
  },
  {
    title: "NYT API Fetch",
    description:
      "An application to search through the NYT articles using keywords and specific dates.",
    image: nyt,
    repo: "https://github.com/IsaiahMurray/NYT-API",
    page: "https://isaiahmurray.github.io/NYT-API/",
    tags: ["HTML/CSS", "JavaScript"],
    type: "JavaScript"
  },
  {
    title: "JS Clock",
    description: "A a real-time clock made using JS DOM manipulation.",
    image: clock,
    page: "https://codepen.io/Salvation205/pen/mdVqKZy",
    tags: ["HTML/CSS", "JavaScript"],
    type: "JavaScript"
  },
  {
    title: "Workout log",
    description: "A React application to track your workouts(Not deployed)",
    image: workout,
    client: "https://github.com/IsaiahMurray/Workout-log-client",
    server: "https://github.com/IsaiahMurray/Work-out-log-server",
    tags: ["HTML/CSS", "JavaScript", "Node JS", "React"],
    type: "JavaScript"
  },
  {
    title: "Portfolio",
    description:
      "This is the portfolio that you are currently viewing, made using React!",
    image: isaiah,
    repo: "https://github.com/IsaiahMurray/React-Portfolio",
    tags: ["HTML/CSS", "JavaScript", "React"],
    type: "JavaScript"
  },
  {
    title: "Picture in Picture",
    description:
      "An app that will let you share a specific screen on your computer, then be able to move and resize it as needed",
    image: pip,
    repo: "https://github.com/IsaiahMurray/Picture-In-Picture",
    page: "https://isaiahmurray.github.io/Picture-In-Picture/",
    tags: ["HTML/CSS", "JavaScript"],
    type: "JavaScript"
  },
  {
    title: "Infinite Picture Scroll",
    description:
      "This is a project that will let you endlessly scroll through random picture from the Unsplash API",
    image: scroll,
    page: "https://isaiahmurray.github.io/Unsplash-Infinite-Scroll/",
    repo: "https://github.com/IsaiahMurray/Unsplash-Infinite-Scroll",
    type: "JavaScript"
  },
  {
    title: "Quotes Generator",
    description: "An app that will generate random quotes!",
    image: quotes,
    page: "https://isaiahmurray.github.io/Quote-Generator/",
    repo: "https://github.com/IsaiahMurray/Quote-Generator",
    tags: ["HTML/CSS", "JavaScript"],
    type: "JavaScript"
  },
  {
    title: "Bookmark-Keeper",
    description: "A custom page to save your bookmarks",
    image: bookmark,
    page: "https://isaiahmurray.github.io/Bookmark-Keeper/",
    repo: "https://github.com/IsaiahMurray/Bookmark-Keeper",
    tags: ["HTML/CSS", "JavaScript"],
    type: "JavaScript"
  },
  {
    title: "Animated Page",
    description: "A highly animated page made using tailwind css",
    image: animation,
    page: "https://isaiahmurray.github.io/Animated-Template/",
    repo: "https://github.com/IsaiahMurray/Animated-Template",
    tags: ["HTML/CSS"],
    type: "JavaScript"
  },
  {
    title: "Joke Teller",
    description: "An app that uses VoiceRSS text-to-talk api to tell you really bad programming jokes!",
    image: joke,
    page: "https://isaiahmurray.github.io/Vocal-Joke-Teller/",
    repo: "https://github.com/IsaiahMurray/Vocal-Joke-Teller",
    tags: ["JavaScript"],
    type: "JavaScript"
    
  },
  {
    title: "Transforming Sharingan",
    description:
      "A fun little CSS project I did for my gold badge at Eleven Fifty Academy. I am a big Naruto fan so I really wanted to do this one.",
    page: "https://codepen.io/Salvation205/pen/QWypRVY",
    image: sharingan,
    tags: ["HTML/CSS"],
    type: "HTML/CSS"
  },
  {
      
  title: "Eleven Note",
  description: "A simple note taking application implementing full CRUD.",
  image: note,
  code: "https://github.com/IsaiahMurray/ElevenNote",
  type: ".Net"
  },
  {
      
  title: "Colossal Sounds",
  description:
    "A database management app for a music store owner that can also function as a way for customers to view products available for sale at the store, and their essential information. This was a collaboration porject from my blue badge course at Eleven Fifty.",
  repo: "https://github.com/IsaiahMurray/Colossal-sounds",
  image: sounds,
  tags: ["C#", "ASP.Net Framework"],
  type: ".Net"
  },
  {  title: "Lil Chef",
  description: 'A web application for creating and managing recipes and ingredients for any who would find it usefull. Built using ASP.NET MVC for front and back end functionality.',
  repo: 'https://github.com/IsaiahMurray/LilChef',
  image: LC,
  tags: ["C#", "ASP.Net Framework", "Razor"],
  type: ".Net"
}
];

export default Projects;
