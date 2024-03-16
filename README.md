<p align="center">
<img alt="Static Badge" src="https://img.shields.io/badge/state-in_progress-blue">
<img alt="Static Badge" src="https://img.shields.io/badge/stage-development-orange">
</p>

# Laravel - Jira Clone

This project is a jira clone built with Laravel using Laravel Breeze + React. Users may have different roles; administrators(can create, manage, delete projects, sprints and 
tasks), moderators(can create and manage but not delete projects, sprints & tasks) and collaborators(can create tasks within a project they are member of, but can not create projects or sprint). Projects can have multiple sprints and tasks. Tasks in a project may or may not be assigned to a sprint. In case a task is not assigned to a sprint, it is in the Backlog (if `sprint_id` column is NULL).

## Basic Sitemap

-   Users
-   Projects
    -   name
    -   description
    -   sprints
        -   tasks

## Database Schema

This is a draft of the database schema that is subject to evolve.

### Projects Table

-   `id` (Primary Key)
-   `name` (Name of the project)
-   `description` (Description of the project)

### Sprints Table

-   `id` (Primary Key)
-   `project_id` (Foreign Key referencing the Projects table)
-   `name` (Name of the sprint)
-   `start_date` (Start date of the sprint)
-   `end_date` (End date of the sprint)

### Tasks Table

-   `id` (Primary Key)
-   `project_id` (Foreign Key referencing the Projects table)
-   `sprint_id` (Foreign Key referencing the Sprints table; can be NULL if the task is not associated with a sprint)
-   `title` (Title of the task)
-   `description` (Description of the task)
-   `assignee_id` (Foreign Key referencing the Users table; the user responsible for the task)
-   `status` (Current status of the task, e.g., "To Do", "In Progress", "Done")
-   `priority` (Priority of the task, e.g., High, Medium, Low)
-   `due_date` (Due date of the task)

### Users Table

-   `id` (Primary Key)
-   `username` (Username of the user)
-   `email` (Email of the user)
-   `password` (Encrypted password of the user)
-   `role_id` (Role of the User to determine their permissions. 3 - Collaborator by default)

### Roles Table

-   `id` (Primary Key)
-   `name` (Name of the Role, e.g., Administrator, Moderator, Collaborator)

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
