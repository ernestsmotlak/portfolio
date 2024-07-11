import React from "react";

const Projects = () => {
  return (
    <div>
      <div
        className="fs-2 text-center"
        style={{ marginTop: "5rem", marginBottom: "2rem" }}
      >
        FULL STACK PROJECTS
      </div>
      <br />
      <ol
        class="list-group list-group-numbered mx-auto"
        style={{ width: "30rem" }}
      >
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Chat App</div>
            Dynamic real-time messaging app.
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <span class="badge text-bg-primary rounded-pill">14</span>
          <span class="badge text-bg-primary rounded-pill">14</span>
          <span class="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Timetable App</div>
            Bus transport app for the city of Koper.
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <span class="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">To Do App</div>
            Task management tool for organizing your daily tasks.
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <span class="badge text-bg-primary rounded-pill">14</span>
        </li>
      </ol>

      <div
        className="fs-2 text-center"
        style={{ marginTop: "5rem", marginBottom: "2rem" }}
      >
        FRONTEND PROJECTS
      </div>
      <br />
      <ol
        class="list-group list-group-numbered mx-auto"
        style={{ width: "30rem" }}
      >
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span class="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span class="badge text-bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span class="badge text-bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </div>
  );
};

export default Projects;
