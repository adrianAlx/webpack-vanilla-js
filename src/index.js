'use strict';

import { consoleMess } from './js/components.js';
import './styles.css';

// Polyfilling
// import 'core-js/stable';
// Polyfilling async f(x)
import 'regenerator-runtime';

import logo from './assets/webpack.svg';
import gemini from './assets/saga-kanon.png';

const d = document,
  $app = d.getElementById('app'),
  $h1 = d.createElement('h1'),
  $logo = d.createElement('img'),
  $img = d.createElement('img');

$h1.textContent = 'Hello World with Webpack in 2021';
$logo.src = logo;
$logo.classList.add('icon');
$img.src = gemini;

$app.append($h1);
$app.append($logo);
$app.append($img);

console.log('Hello world!');
consoleMess();

//////////////////////////////////////////////////////////////////
// Async
const users = [
  { id: 1, name: 'Dorian' },
  { id: 2, name: 'Laura' },
  { id: 3, name: 'Carlos' },
];
const emails = [
  { id: 1, email: 'dorian@gmail.com' },
  { id: 2, email: 'laura@gmail.com' },
];

const getUser = async id => {
  const user = users.find(user => user.id == id);
  if (!user) throw new Error(`Doesn't exist an user with id ${id}`);
  else return user;
};

const getEmail = async user => {
  const email = emails.find(email => email.id == user.id);
  if (!email) throw new Error(`${user.name} hasn't email`);
  else
    return {
      id: user.id,
      name: user.name,
      email: email.email,
    };
};

const getInfo = async id => {
  try {
    const user = await getUser(id);
    const res = await getEmail(user);
    return `${user.name}'s email is ${res.email}`;
  } catch (error) {
    console.log(error);
  }
};

getInfo(2).then(res => console.log(res));
