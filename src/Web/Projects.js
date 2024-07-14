import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <div
        className="fs-2 text-center"
        style={{ marginTop: "4rem", marginBottom: "1rem" }}
      >
        FULL STACK PROJECTS
        <hr class="border border-secondary border-2 opacity-50 mx-auto w-25"></hr>
      </div>
      <br />
      <ol
        class="list-group list-group-numbered mx-auto"
        style={{ width: "30rem" }}
      >
        <li class="list-group-item d-flex justify-content-between align-items-start mb-2 border rounded">
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <a href="http://84.247.184.37:3021/">Chat App</a>
            </div>
            Dynamic real-time messaging app.
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Socket.io</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/ChatApp">
            <FaGithub className="fs-4 text-black" />
          </a>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start mb-2 border rounded">
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <a href="http://84.247.184.37:3002/">Timetable App</a>
            </div>
            Bus transport app for the city of Koper.
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/Timetable">
            <FaGithub className="fs-4 text-black" />
          </a>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start mb-2 border rounded">
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <a href="http://84.247.184.37:3006/">To Do App</a>
            </div>
            Task management tool for organizing your daily tasks.
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/To-Do-App">
            <FaGithub className="fs-4 text-black" />
          </a>
          
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start mb-2 border rounded">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Rock Paper Scissors Game</div>A simple Rock
            Paper Scissors game made with Socket.io.
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Socket.io</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/Rock-Paper-Scissors">
            <FaGithub className="fs-4 text-black" />
          </a>
        </li>
      </ol>

      <div
        className="fs-2 text-center"
        style={{ marginTop: "4rem", marginBottom: "1rem" }}
      >
        FRONTEND PROJECTS
        <hr class="border border-secondary border-2 opacity-50 mx-auto w-25"></hr>
      </div>
      <br />
      <ol
        class="list-group list-group-numbered mx-auto"
        style={{ width: "30rem" }}
      >
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <a href="https://weather-api-app-orpin.vercel.app/">
                Weather App
              </a>
            </div>
            A simple weather app made with&nbsp;
            <a href="https://www.weatherapi.com/">Weather api.</a>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/Weather-Api-App">
            <FaGithub className="fs-4 text-black" />
          </a>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <a href="http://84.247.184.37:3010/TimetableClean">
                Calculation App
              </a>
            </div>
            A collection of mini projects made in React.
            <ul>
              <li>
                A simple program for calculating the ammount of hours worked
                from a given string.
              </li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/SmallRandomProjects">
            <FaGithub className="fs-4 text-black" />
          </a>
        </li>
      </ol>

      <div
        className="fs-2 text-center"
        style={{ marginTop: "4rem", marginBottom: "1rem" }}
      >
        OTHER
        <hr class="border border-secondary border-2 opacity-50 mx-auto w-25"></hr>
      </div>
      <br />
      <ol
        class="list-group list-group-numbered mx-auto mb-5"
        style={{ width: "30rem" }}
      >
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              Sentimental analysis of tweets and short texts.
            </div>
            Project to determine sentimental value of short text in Slovenian,
            Serbian, Croatian and Bosnian language.
            <ul>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/Diploma">
            <FaGithub className="fs-4 text-black" />
          </a>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start mt-2 border rounded">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Convertion App</div>
            Simple app for converting the value of Serbian Dinar to Euro.
            <ul>
              <li>Swift</li>
            </ul>
          </div>
          <a href="https://github.com/ernestsmotlak/DinToEuroSwiftApp">
            <FaGithub className="fs-4 text-black" />
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Projects;
