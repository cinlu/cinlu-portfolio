export interface Project {
  title: string;
  youtubeID: string; 
  desc: string;
  technologiesUsed: Array<string>;
  image: string;
  projectLink: string;
  gitLink: string;
  alt: string;
  width: number;
  height: number;
}

export const completedProjects: Project[] = [
  {
    title: "Spotify Unmixed",
    youtubeID: "LkzS-93GcXk", 
    desc: "Spotify Unmixed is a web app that allows users to login using Spotify's Authentication Service and find stats on their top listens, and recommendations based on their recent favorites. Technologies used include React, React Router, Context API, React Bootstrap, Node.js, Spotify Web API, OAuth. It's deployed with Netlify, but is currently inactivated due to Spotify's access token limitations.",
    technologiesUsed: ["React", "Node.js", "Spotify API"],
    image: "/projectImgs/unmixed.png",
    projectLink: "",
    gitLink: "https://github.com/cinlu/spotify-unmixed",
    alt: "Spotify Unmixed",
    width: 250,
    height: 230,
  },
  {
    title: "This Website",
    youtubeID: "", 
    desc: "Welcome to my personal portfolio website :) I decided to use Next.js because not only does it still reatain all the benefits of React, but it also initializes the first render serverside which results in faster initial load times and better search engine optimization. Both of which are good for a personal portfolio! Technologies used include React, Next.js, Tailwind CSS. It is deployed using Vercel. ",
    technologiesUsed: ["React", "Next.js", "Tailwind"],
    image: "/projectImgs/website.png",
    projectLink: "https://cinlu-portfolio.vercel.app/",
    gitLink: "https://github.com/cinlu/cinlu-portfolio",
    alt: "This Website",
    width: 250,
    height: 230,
  },
  {
    title: "Gender Classification",
    youtubeID: "", 
    desc: "Scraped, cleaned, and analyzed 40,000 patents from the Google Patents webpage for a BU Law department study on global gender distribution data. Used data aggregation and classification methods to analyze the accuracy of character based and romanized name gender classifiers. Technologies used include Python's Pandas, SciPy, and NumPy libraries.",
    technologiesUsed: ["Python", "Pandas", "NumPy"],
    image: "/projectImgs/gender_classification.png",
    projectLink: "https://drive.google.com/file/d/1uElhU7uS2amPFGEeg_F4h2uQB-SfdHli/view?usp=sharing",
    gitLink: "",
    alt: "Korean Chinese Name Based Gender Classification",
    width: 250,
    height: 230,
  },
  {
    title: "Productivity Pet",
    youtubeID: "", 
    desc: "This is a web app that allows for task management. Users can add tasks, delete tasks by double clicking a task, and tasks are automatically saved to local storage. Technologies used include React, Node.js, and HTML/CSS.  It's currently deployed on github pages so go ahead and give it a try!",
    technologiesUsed: ["React", "Node.js", "HTML/CSS"],
    image: "/projectImgs/productivity-pet.png",
    projectLink: "https://cinlu.github.io/productivity-pet/",
    gitLink: "https://github.com/cinlu/productivity-pet",
    alt: "Productivity Pet",
    width: 250,
    height: 230,
  },
  {
    title: "Tic Tac Toe",
    youtubeID: "", 
    desc: "This is a web app that allows the user to play a game called Tic Tac Toe. Technologies used include React, Node.js, and HTML/CSS. It's currently deployed on github pages so go ahead and give it a try!",
    technologiesUsed: ["React", "Node.js", "HTML/CSS"],
    image: "/projectImgs/tic-tac-toe.png",
    projectLink: "https://cinlu.github.io/tic-tac-toe/",
    gitLink: "https://github.com/cinlu/tic-tac-toe",
    alt: "Tic Tac Toe",
    width: 250,
    height: 230,
  }
];
