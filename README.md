# Developer Insights Platform

A full stack productivity dashboard designed for engineering teams to track developer activity, code contributions, and workflow metrics across GitHub, Jira, and CI/CD pipelines.

Built using **Java (Spring Boot)**, **React.js**, **PostgreSQL**, and **Docker**, the platform provides meaningful insights to help teams stay transparent, aligned, and productive.

---

## Features

-  **GitHub Metrics**
  - Commits per developer
  - Pull Request (PR) turnaround time
  - Contribution frequency

-  **Jira Integration**
  - Issue cycle time (To Do → Done)
  - Story points vs. velocity
  - Sprint performance metrics

-  **CI/CD Metrics**
  - Test coverage trends (via JaCoCo)
  - Build success/failure rates
  - Deployment frequency

-  **Interactive Dashboard**
  - Role-based views (Developer, Tech Lead, Manager)
  - Visual charts (bar, line, radar)
  - Realtime data updates

---

##  Tech Stack

### Backend
- Java 17, Spring Boot 3
- PostgreSQL, Hibernate (JPA)
- JWT Authentication
- REST APIs, Swagger/OpenAPI
- Quartz Scheduler for polling

### Frontend
- React.js + TypeScript
- Redux Toolkit for state
