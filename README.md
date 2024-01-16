# Dispatch Frontend Interview

Hi!

We're delighted you're interested in the Dispatch team! Our interview challenge involves solving a practical, real-world problem, giving us insight into your problem-solving and communication skills.

**Time**: We don't expect this problem to be completed in an hour. We're primarily interested in seeing how you approach the problem, and how you communicate your thought process. We're happy to answer any questions you have along the way!

**Tech Stack**: We've prepared a basic setup using our MUI + react-query stack. Feel free to start here or use a different stack if you prefer.

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
