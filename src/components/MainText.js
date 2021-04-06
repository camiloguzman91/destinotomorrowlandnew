import React from 'react'
import '../assets/styles/components/MainText.css'
import EntryImg from '../assets/static/Entrada_m.jpg'

const MainText = () => {
  return (
    <div>
      <section id="Inicio1" className="Introduction">
        <div className="container-intro">
          <h2>Introducción</h2>
        </div>
      </section>
      <section id="Inicio" className="event-list">
        <div className="container">
          <article className="event">
            <figure className="event-imageContainer">
              <img src={EntryImg} alt="Entrada Tomorrowland"/>
            </figure> 
            <div className="event-detail">                   
              <p className="event-description">Tomorrowland es el festival de música electrónica más importante y popular del mundo, que se celebra cada verano en el parque 'De Schorre' ubicado en Boom, Bélgica. Tiene las presentaciones de los DJ más importantes, como: Tiësto, Martin Garrix, Armin van Buuren, David Guetta, etc. Tomorrowland comenzó en 2005 y desde entonces ha sido el festival de música más grande y notable del mundo.</p> <p>Actualmente, se extiende durante dos fines de semana y generalmente las entradas se agotan en pocos minutos.
                La primera edición de este festival fue en agosto de 2005 con la asistencia de casi diez mil personas y su duración fue de un día. Como en un caso curioso, la gente tuvo que acampar frente al escenario. Para el año 2011, la demanda de boletos fue mucho más alta que años atrás, en donde todos los 180,000 tiquetes se agotaron en menos de un día.</p> <p> Después de ganar por primera vez en el 2012 el "Premio Internacional de Música Dance" por el mejor evento musical, Tomorrowland se había convertido oficialmente 
                en el festival más global del mundo; en este mismo año lanzó su propio canal, con más de ocho millones de personas sintonizando, poco después se convirtió rápida y fácilmente en el festival de música más visto en el planeta.
                Después de eso, la edición del 2018 tuvo una asistencia de 400,000 personas durante los dos fines de semana, en la cual las entradas para el festival se agotaron rápidamente. El tema de la edición 2018 fue "La historia de Planaxis", donde hubo muchos homenajes de Avicii para conmemorar la muerte del DJ sueco tres meses antes del festival.</p>
                <p>En cuanto al tipo de música, el EDM es el subgénero más tocado durante el festival, aunque en otros escenarios se puede escuchar techno, trance, Drumm & Bass, entre otros. El DJ con más presentaciones ha sido David Guetta, quien ha estado presente desde el comienzo del festival. Otros artistas que se han presentado más de una vez, han sido: Tiësto, Martin Garrix, 
                Robin Schulz, Carl Cox, Hardwell, Dimitri Vegas y Like Mike.
                Finalmente, este festival es uno de los más populares en todo el mundo debido a la magia en cada rincón debido a su fantástico entorno, música y gente de todo el mundo. Además, todos deberían visitarlo al menos una vez en sus vidas.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default MainText
