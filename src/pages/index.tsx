import type { NextPage } from 'next'
import { useState, FormEvent } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import InputTel from '../components/InputTel';


const Home: NextPage = () => {
const [number, setNumber] = useState("");
const [message, setMessage] = useState("");

function handleSubmit(event: FormEvent) {
  event.preventDefault();

  window.open(`https://api.whatsapp.com/send?phone=+55${number}&text=${message}`);

}


  return (
   <div>
      <Head>
        <title>Direct Zap :: Envie mensagem para o zap sem adicionar contato</title>
        <meta name="description" content="Envie mensagem para Whats App sem adicionar o número em sua lista de contato" />

        <meta name="mobile-web-app-capable" content="yes"/>
        <link rel="icon" sizes="114x114" href="/img/icons/144x144.png"/>
        <meta name="theme-color" content="#0e6800"/>

        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Direct Zap :: Envie mensagem para o zap sem adicionar contato"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <link rel="apple-touch-icon-precomposed" href="/img/icons/144x144.png"/>

        <meta name="msapplication-TileImage" content="/img/icons/144x144.png"/>
        <meta name="msapplication-TileColor" content="#0e6800"></meta>

        <link rel="manifest" href="manifest.json"/>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


<section className="wrapper container-fluid text-center" style={{height: "50% !important;", background: "#009688"}}>
  
		<div className="container desktop">
			<div className="col-md-12 container">
      <Image
         src="/img/logo.svg"
          alt="Logo"
          width={200}
          height={50}
          />
				<h2 className="h2"> 
				Envie mensagem no WhatsApp de qualquer número sem adicionar o contato
				</h2>
			</div>
			
    </div>
  </section>
  
  <form onSubmit={handleSubmit}>
  <section className="wrapper" style={{ backgroundColor: "#e7e7e7;"}}>
        <div className="container">            
           
   
				<div className="col-md-12 form-group">
          <InputTel
          mask={"99 99999 9999"}   
          onChange={e =>setNumber(e.target.value)}
          />
         
        </div>
                
          <div className="row">
              <div className="col-md-12 col-xs-12 form-group">
              <textarea name="msg" 
                  className="textarea form-control"
                  required
                  placeholder="Digite aqui a mensagem que quer enviar para algum WhatsApp sem 
                  adicionar o contato"
                  onChange={e =>setMessage(e.target.value)}
                  style={{height: "319px;"}}
                />
              </div> 
              <div className="col-md-12  text-center">
              <input name="btn" className="btnSub" type="submit" value="Enviar Mensagem"/>
              </div>
          </div>
	
        </div>
    </section>
    
    
  </form>
  
  
  
    </div>
	
  )
}

export default Home
