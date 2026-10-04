function About() {
  return (
    <main className="aboutPage">
      <section className="aboutSection">
        <h1>About Me</h1>

        <img
          src="/profilepic.jpeg"
          alt="My profile Picture"
          className="profileImage"
        />

        <h2>Rebeca Galvao</h2>

        <p>
         Hi! My name is Rebeca Chagas Galvão, and I am a second-year Software Engineering student.
        <p></p>
        I am originally from Brazil, where I studied Advertising and Communications at university for four years. During that time, I became interested in the data and technology side of marketing, especially data analysis, paid traffic, and working with platforms like Google Ads and Meta Ads. This interest eventually led me to change directions and start my journey in Software Engineering.

        I enjoy learning new things, exploring different areas of technology, and finding ways to combine my previous experience in marketing with my new skills in programming and data. 

        </p>

        <a href="/RebecaGalvaoResume.pdf" target="_blank">
          View My Resume
        </a>
      </section>
    </main>
  )
}

export default About