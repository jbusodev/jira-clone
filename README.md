# Laravel - Jira Clone

This project is a jira clone built with Laravel using Laravel Breeze + React.

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

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
