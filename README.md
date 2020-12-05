# API using SOLID principles
This project was made intending to practice SOLID methods.
The API created in this project is responsible to register users. This API have an email confirmation that is send to the registered users.

#### Technologies used
- Node.js and express module: as server
- Typescript: as programming language 
- Mailtrap: to test the email confirmation

### Directory project structure (in src folder)
- entities
    - Agents that are part of the business model regardless of the way the business works (software, app, office, etc).
- repositories
    - Files for communication between the application's functionalities with the database. In this folder there are interfaces, which are used by the program to understand which methods are available, and the implementations, which are the hardcoded implementations.
    - The interfaces in this folder favor the **Liskov Substitution** and **Dependency Inversion** principles.
- useCases
    - In this directory are present the business rules and actions that a specific agent can do in the application. No hardcoded implementations are present, just the 'comunication contracts' that will be used as pattern by the application classes. 
    - The user cases are separated in different folders and each folder have five files to favor the **Single Responsibility principle**.
    - The DTO (data transfer object) file is responsible to determinate a data format.
    - The index.ts file is responsible to connect the interfaces with the specifical (hardcoded) implementations, putting in practice the **Liskov Substitution principle**.
- providers
    - This directory is used to connect our application with external APIs.
    - This directory works like the "repositories" folder, but using connections that are less critical to the application.

This project was based on the Rocketseat video that shows on practice how the SOLID methods are applied on APIS. The video: https://youtu.be/vAV4Vy4jfkc
