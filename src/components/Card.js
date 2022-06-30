import React from 'react';

export default function Card(props) {
  return (
    <div className='card'>
      <img className='card--image' src={`.${props.item.img}`} />
      <div className='card--description'>
        <span className='card--description--location'>
          {props.item.location}
        </span>
        <a href={props.item.googleMapsUrl} className='card--description--gmaps'>
          View on Google Maps
        </a>
        <div className='card--description--title'>{props.item.title}</div>
        <div className='card--description--date'>
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className='card--description--text'>{props.item.description}</div>
      </div>
    </div>

    //   <div className='card'>
    //   <img className='card--image' src='../images/pula.png' />
    //   <div className='card--description'>
    //     <span className='card--description--location'>CROATIA</span>
    //     <a
    //       href='https://www.google.com/maps'
    //       className='card--description--gmaps'
    //     >
    //       View on Google Maps
    //     </a>
    //     <div className='card--description--title'>Pula</div>
    //     <div className='card--description--date'>
    //       12, Jan 2021 - 24 Jan, 2021
    //     </div>
    //     <div className='card--description--text'>
    //       Pula, grad u Hrvatskoj. Najveći je grad Istarske županije, leži na
    //       jugozapadnom području istarskog poluotoka u dobro zaštićenom zaljevu.
    //     </div>
    //   </div>
    // </div>
  );
}
