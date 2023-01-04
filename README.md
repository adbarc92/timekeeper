# timekeeper

A simple shift management application.

## Features

- Allows user(s) to be identified via a unique ID assigned to each employee []
- Prohibits unidentified user(s) from using application []
- Allows user(s) to start a work shift []
- Disallows user(s) from starting multiple shifts simultaneously []
- Allows user(s) to end a work shift []
- Disallows user(s) from starting a shift during an active shift []

- Users can start shifts, but only if there is not already one ongoing and only one at a time []
- Users can end shifts, but only if there is no active break or lunch []
- Users can start and end breaks, but only during an active shift []
- Users can start and end lunches, but only during an active shift []

## Design Notes

- The server file structure is based on this [post](https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401)
- The employee predates the user. The employee is created on-hire; the user is created when the employee logs in.
