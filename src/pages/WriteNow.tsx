import { Button } from "../components/Button/Button";
import { Nav } from "../components/Nav/Nav";

export function WriteNowPage() {
  return(
    <>
      <Nav />
      <div className="container">
        <h1>Escrever agora</h1>

        <form>
          <label htmlFor="destinationName">Nome Completo</label>
          <input type="text" />

          <label htmlFor="destinationAddress">E-mail</label>
          <input type="text" />

          <label htmlFor="dueDate">Data</label>
          <input type="text" />

          <label htmlFor="subject">Assunto</label>
          <input type="text" />

          <label htmlFor="body">Mensagem</label>
          <input type="text" />

          <Button type="submit">Enviar</Button>
        </form>
      </div>
      
    </>
  )
}