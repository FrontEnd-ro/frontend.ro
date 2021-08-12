import React from 'react';
import List from './List';

export default {
  title: 'List',
};
export const Default = () => (
  <>
    <p>
      {' '}
      Luna aceasta ne propunem următoarele:
      {' '}
    </p>
    <List>
      <li>
        Sa incepem lucrul la Git Challenges 
      </li>
      <li>
        Sa terminam postarile legate de capitolul de HTML
      </li>
      <li>
        Sa fim mai activi pe social media
      </li>
    </List>
  </>

);
export const Bullets = () => (
  <>
    <p>Exista trei tipuri de elemente, în funcție de aceste relații:</p>
    <List variant="bullets">
      <li>
        elemente de tip părinte -
        {' '}
        <strong>parent elements</strong>
      </li>
      <li>
        elemente de tip copil -
        {' '}
        <strong>child elements</strong>
      </li>
      <li>
        elemente de tip frate / sora -
        {' '}
        <strong>sibling elements</strong>
      </li>
    </List>
  </>
);
export const Checkmark = () => (
  <>
    <p> Fiecare pagină web este alcătuită din următoarele elemente principale: </p>
    <List as="ol" variant="checkmark">
      <li>
        {'<!DOCTYPE html>'}
        {' '}
        îi specifică browserului că acest document este de tipul HTML
      </li>
      <li>
        {'<html>'}
        {' '}
        este elementul părinte al fiecărei pagini
      </li>
      <li>
        {'<head>'}
        {'<body>'}
        {' '}
        sunt descendenți ai elementului
        {'<html>'}
        și vor fi definiți o singură dată
      </li>
    </List>
  </>
);

export const Count = () => (
  <>
    <List as="ol" variant="count">
      <li>
        <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/">MDN - Mozilla Developer Network</a>
        {' '}
        este locul unde găsim cele mai calitative și detaliate documentații despre HTML,
        CSS și JavaScript - cele 3 limbaje ce compun FrontEnd development-ul.
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/">Stack Overflow</a>
        {' '}
        este o comunitate de developeri ce învață și codează împreună.
      </li>
    </List>
  </>
);
