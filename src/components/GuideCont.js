import React from 'react'
import '../assets/styles/components/GuideCont.css'
import Caja from '../assets/static/manilla.jpg'
import Manilla from '../assets/static/manilla_2.jpg'
import Freedom from '../assets/static/escenario.jpg'
import Beer from '../assets/static/bebida.jpg'

const GuideCont = () => {
  return (
    <div>
      <section id="Inicio1" className="Introduction">
        <div className="container-intro">
            <h2>Guía</h2>
        </div>
      </section>
      <section id="Inicio" className="event-list_gc">
        <div className="container">
            <article className="event_gc">
              <figure className="event-imageContainer">
                <img className="event-image_gc" src={Caja} width="500"/>
              </figure> 
              <div className="event-detail_gc">                   
                <p className="event-description">Inicialmente, se requiere realizar el pre registro en la página web de Tomorrowland desde el mes de diciembre anterior al año del festival al que se quiere asistir; esto se puede hacer hasta mediados de enero.</p> <p>
                Posterior al pre registro, Tomorrowland envía un link al correo para realizar el registro oficial. La venta de ticketes usualmente se distribuye de la siguiente manera:</p>
                <ol>
                  <li>- Penúltimo sábado de enero: Venta Global Journey (Paquetes que incluyen hotel o transporte)</li>
                  <li>- Último sábado de enero: Pre venta mundial (Paquetes que incluyen estancia en Dreamville)</li>
                  <li>- Primer sábado de febrero: Venta mundial (Paquetes que incluyen estancia en Dreamville), precios un poco más altos.</li>
                </ol>
              </div>
            </article>
            <article className="event_gc">
              <div className="event-detail-r">                   
                <p className="event-description">Personalmente recomiendo comprar el plan de la etapa Global Journey debido a que, como es bien conocido, los tiquetes se acaban en cuestión de minutos a partir de que salen a la venta, entonces con
                el de Global Journey hay mayor probabilidad de poder comprar uno de estos. Para tener mayor seguridad sobre el presupuesto, Tomorrowland envía al correo registrado un link para realizar la simulación de los 
                precios de cada paquete, previo a la venta oficial.</p> <p>Yo compré el plan de Global Journey que incluía: Pase para todos los tres días del segundo fin de semana del festival, hotel en Bruselas (Meininger), desayunos, 
                transporte hotel &lt; -- &gt; Tomorrowland. La manilla (la cual permite el ingreso a Tomorrowland y comprar cosas en el festival) llega aproximadamente en junio a la dirección diligenciada en el registro, ésta se recarga
                comprando la modena oficial "perla".</p>
              </div>
              <figure className="event-imageContainer">
                <img className="event-image" src={Manilla} width="500"/>
              </figure> 
            </article>
            <article className="event_gc">
              <figure className="event-imageContainer">
                <img className="event-image" src={Freedom} width="500"/>
              </figure> 
              <div className="event-detail_gc">                   
                <p className="event-description">Para ir hasta Bélgica, viajé en la aerolínea Air Europa (Bogotá-Madrid-Bruselas). En Bruselas es aconsejable tomar el transporte público el cual tiene un precio de 3 euros por viaje, debido a que el
                servicio de taxi o uber es considerablemente costoso. Al llegar al hotel hay personal de Tomorrowland, el cual lo recibe a uno para dar las respectivas indicaciones y entregar diferentes elementos (maleta oficial, diario y una
                caja de cartas de póker). El horario de salida del transporte hacia el festival es de 12:00 hasta las 13:00, por lo cual hay que estar bastante pendiente para no perder el bus, pero en el caso de que esto suceda, hay personal particular
                que realiza el viaje pero a un precio elevado.</p> <p>Al llegar al parque que aloja a este evento hay que pasar por diferentes controles de seguridad los cuales son muy estrictos, por eso se recomienda totalmente no tratar de ingresar 
                algún tipo de sustancia o elemento ilícito. Si no hubo problemas con esto, oficialmente se ha ingresado a Tomorrowland, lo cual a primera vista resulta increible. Dentro del evento se pueden encontrar alrededor de 18 escenarios, en los cuales
                hay DJ's presentando diferentes estilos de música eletrónica. Recomiendo tratar de asistir a cada uno de ellos, debido a que tienen temáticas geniales, y no estar solamente en el Mainstage.</p>
              </div>
            </article>
            <article className="event_gc">
              <div className="event-detail-r">                   
                <p className="event-description"> No solamente la música es fantástica en el festival, ya que la gente que asiste es muy amable y se pueden realizar intercambios culturales, lo que hace que el ambiente sea muy agradable. Otra cosa que resulta ser
                excepcional es la comida y la bebida, hay gran variedad de platos de todo el mundo con sabores deliciosos, además que es muy aconsejable estar hidratado en todo momento, ya que, hay que estar en constante movimiento y la temperatura suele ser
                muy elevada en esa época del año.</p> <p>Como conclusión, asistir a Tomorrowland es una de las mejores experiencias que se puede tener en la vida, son momentos inolvidables los que se pasan allá, al punto de no querer abandonar nunca el evento.</p>
                <br /><p>Enjoy it!</p>
              </div>
              <figure className="event-imageContainer">
                <img className="event-image" src={Beer} width="500"/>
              </figure> 
            </article>
        </div>
      </section>
    </div>
  )
}

export default GuideCont
