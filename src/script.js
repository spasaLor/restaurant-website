import './style.css';
import {initialLoad} from './loader.js';
import {loadMenu} from './menuLoader.js';
import { loadContact } from './contactLoader.js';

addEventListener("DOMContentLoaded", initialLoad);
const btnMenu=document.getElementById('menu');
btnMenu.addEventListener('click',loadMenu);
const btnContact= document.getElementById('contact');
btnContact.addEventListener('click',loadContact);