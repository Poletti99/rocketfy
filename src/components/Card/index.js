import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer algo legal</p>
      <img src="https://api.adorable.io/avatars/285/Virtu.png" alt="Avatar"/>
    </Container>
  );
}
