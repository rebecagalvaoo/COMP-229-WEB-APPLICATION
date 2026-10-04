import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()

  //isso que faz enviar o formulário e redirecionar para a página inicial
  function sendForm(event) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <main className="contactPage">

      <h1>Contact Me</h1>

      <p>Email: Rebecagalvao000@gmail.com</p>
      <p>Phone: 1 437 410 7351</p>
      <p>Location: Toronto, Canada</p>

      <h2>Send me a Message</h2>
      

      {/* adicionei onSubmit={sendForm} dentro do form para que quando o formulário seja enviado a função seja chamada e redirecione para a página inicial */}

      <form onSubmit={sendForm}>

        <label>First Name</label>
        <input type="text" required />

        <label>Last Name</label>
        <input type="text" required />

        <label>Contact Number</label>
        <input type="tel" required />

        <label>Email Address</label>
        <input type="email" required />

        <label>Message</label>
        <textarea rows="6" ></textarea>

        <button type="submit">Send Message</button>

      </form>

    </main>
  )
}

export default Contact