# Dispatch Frontend Interview

Hi!

We're delighted you're interested in the Dispatch team! Our interview challenge involves solving a practical, real-world problem, giving us insight into your problem-solving and communication skills.

**Format**: This is a take-home challenge. You can work on it at your own pace, and submit your solution when you're ready. We'll review your submission and schedule a follow-up interview to discuss your solution.

**Time**: We expect this challenge to take 2-4 hours. While you do not have to limit yourself to this time, we aren't looking for 100% polish and hope to discuss time tradeoffs in our follow-up interview as prioritization and balancing "right" vs. "right, for now" is critical at this stage of our company.

**Tech Stack**: We've prepared a basic setup using our MUI + react-query stack. Feel free to start here or use a different stack if you prefer. Our day to day stack is

* Typescript
* Vite
* React
* MUI
* React Router (v6)
* React Query (v5)
* Zustand
* Immer
* React Hook Form
* Fastify
* Vitest
* Playwright


## Getting Started

To get started, clone this repository and install dependencies:

```sh
npm ci
npm start
```

## MVP

Create a CRUD application for managing user details. It should include:

- User list display
- Form to add a new user
- Options to edit and delete users

The user should have the following fields:

- First Name
- Last Name
- Date of Birth
- Email
- Phone Number


Design a multi-page form to collect this information, with name and DOB on the first page and contact details on the second. Basic layout and usability are important, but advanced styling is not required. MUI or similar UI frameworks should suffice.

## APIs

To support your application, we've set up a mock API server using [MSW](https://mswjs.io/). It simulates backend functionality without the need for a full backend setup. The API includes these endpoints:

  - `GET /api/v1/users` - Get a list of users
  - `POST /api/v1/users` - Create a new user
  - `PUT /api/v1/users/:id` - Update an existing user
  - `DELETE /api/v1/users/:id` - Delete an existing user
