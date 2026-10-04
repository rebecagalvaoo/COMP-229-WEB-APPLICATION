import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <section className="homeSection">
        <h1>Welcome to My Portfolio</h1>

        <p>
          Hello! My name is Rebeca Galvao, and welcome to my personal portfolio.
        </p>

        <p>
          I am a Software Engineering student at Centennial College, currently in my second year of the program. I am interested in data analysis, programming, and web development, and I am continuously working to expand my technical skills and explore different areas of technology.
        </p>

        <Link to="/about">
          <button>Learn More About Me</button>
        </Link>
      </section>

      <section className="missionSection">
        <h2>My Mission</h2>

        <p>
          My mission as a student is to always keep learning and try different areas of technology while focusing on the areas I am most interested in. I want to keep improving my skills, gain more experience, and discover what I enjoy most in the technology field.
        </p>
      </section>
    </main>
  )
}

export default Home //estou exportando o componente Home como o principal desse arquivo