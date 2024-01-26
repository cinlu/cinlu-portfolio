export interface Experience {
  company: string;
  position: string;
  time: string;
  image: string;
  width: number;
  height: number;
  description: string; 
}

export const experiences: Experience[] = [
  {
    company: "WhatIf Media Group",
    position: "Software Engineer Intern",
    time: "June '22 - Aug '22",
    image: "/WhatifMedia.png",
    width: 150,
    height: 150,
    description: "Worked in a full stack role on a Content Management System web application. Created a feature that would allow users to create and preview HTML templates faster, reducing wait times from 3 hours to milliseconds. Participated in the design process, creating design documents and meeting with stakeholders to develop this feature. Utilized React, Material UI, and Redux Forms in the frontend, and RESTful API's, AWS S3, and Java Spring Boot in the backend. Tested features using JUnit and deployed to production. In addition, also partook in routine bug fixes, refactoring, and other ticket items for the team."
  },
  {
    company: "Publicis Sapient",
    position:  "Software Engineer Intern",
    time: "June '21 - Aug '21",
    image: "/PublicisSapient.png",
    width: 150,
    height: 150,
    description: "Collaborated with 4 other interns to create a full stack MVP of an ecommerce web application using Java Spring Boot, React, MySQL, and deployed to Google Cloud Platform. Developed a backend service for user authentication and authorization, using RESTful API's and in the MVC design pattern. Implemented the frontend user authorization component, creating the user interface for user login, user sign up, and user profile. Used React Router to control user authorization depending on different levels of user permissions."
  }
];
