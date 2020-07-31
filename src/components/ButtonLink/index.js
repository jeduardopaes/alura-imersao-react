import React from 'react';

function ButtonLink(props) {

  /*
  props =>{
    children: "Texto do Botão",
    className: "É o que?",
    href: "<Path>"
  }
  */

  return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
  );
}

export default ButtonLink;