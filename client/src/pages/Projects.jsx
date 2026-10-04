function Projects() {
  return (
    <main className="projectsPage">
      <h1>My Projects</h1>

      <section className="project">
        <img
          src="/project1.png"
          alt="Real Estate Agent Website"
        />

        <div className="projectInfo">
          <h2>Real Estate Agent Website</h2>

          <p>
            A website created for a real estate agent as a group project. The website includes a home page, available properties, a contact form, and a site map to help visitors navigate the website.
          </p>

          <p>
            <strong>My Role:</strong> I was responsible for designing the website and creating the initial structure and layout of the pages. I built the website skeleton and navigation so my group members could add the content and information to each page.
          </p>

          <p>
            <strong>Completed:</strong> December, 2025
          </p>
        </div>
      </section>

      <section className="project">
        <img
          src="/project2.png"
          alt="Linux and SQL Database Project"
        />

        <div className="projectInfo">
          <h2>Linux and SQL Database Project</h2>

          <p>
            A database project developed using Linux and MariaDB. The project involved creating a database, working with multiple tables, and using SQL commands to manage and retrieve data.
          </p>

          <p>
            <strong>My Role:</strong> I was responsible for setting up and managing the database through the Linux terminal, creating the database tables, and writing SQL queries to work with the data.
          </p>

          <p>
            <strong>Completed:</strong> April, 2026
          </p>
        </div>
      </section>

      <section className="project">
        <img
          src="/project3.jpg"
          alt="Paid Traffic Campaign Data Model"
        />

        <div className="projectInfo">
          <h2>Paid Traffic Campaign Data Model</h2>

          <p>
            A data model created to organize paid traffic campaign information, including campaigns, ad sets, ads, creatives, and performance metrics.
          </p>

          <p>
            <strong>My Role:</strong> I designed the structure to organize campaign data and connect information between campaigns, ad sets, ads, and creatives.
          </p>

          <p>
            <strong>Completed:</strong> May, 2024
          </p>
        </div>
      </section>
    </main>
  )
}

export default Projects