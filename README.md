<h1 align="center" id="title">Tailor's Data (Back-end)</h1>

<p id="description">This repository contains the backend part of the Tailor Data project. The backend is built using Node.js and Express.js with PostgreSQL as the database. The GraphQL API is created using PostGraphile which provides a seamless integration with the PostgreSQL database.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   GraphQL API for efficient data handling
*   Multiple queries and mutations for comprehensive data manipulation
*   PostgreSQL database integration
*   Docker support for local development and deployment
*   Deployed on AWS RDS and Render

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository:</p>

```
git clone https://github.com/yourusername/tailor-data-backend.git 
```

```
cd tailor-data-backend
```

<p>3. Install dependencies:</p>

```
npm install
```

<p>4. Configure environment variables: Create a .env file in the root directory and add the following:</p>

```
DATABASE_URL=your_postgresql_database_url
```

<p>5. Run the server:</p>

```
node index.js
```
<h2>🛠️ Docker Installation Steps:</h2>

  <p>1. Ensure you have Docker and Docker Compose installed on your system. You can download them from Docker. </p>
  <p>2. Create the Docker image by running the following command in the root directory of your project:</p>
  
  ```
  docker-compose build
  ```
  <p>3. Run the Docker containers:
    
</p>

```
docker-compose up

```


<h2>💻 Built with</h2>

Technologies used in the project:

*  [Nodejs](https://nodejs.org/)
*  [Express.js](https://expressjs.com/)
*  [PostgreSQL](https://www.postgresql.org/)
*  [PostGraphile](https://www.graphile.org/postgraphile/)
*  [Docker](https://www.docker.com/)
*  [AWS RDS](https://aws.amazon.com/rds/)
*  [Render](https://render.com/)

<h2>🍰 Contribution Guidelines:</h2>

This project was developed by Neel Vaidya (https://github.com/neelvaidya133). Special thanks to my mentor Nisarg Tailor (https://github.com/) whose idea and guidance were instrumental in building this project. Additional thanks to the open-source community and contributors.

  
  
<h2>💻 Additional Details </h2>

The Frontend repository for this project is also built and deployed by me. You can find the Frontend repo and more information [here](https://github.com/neelvaidya133/Tailor).
<h2>🛡️ License:</h2>

This project is licensed under the MIT LICENSE
