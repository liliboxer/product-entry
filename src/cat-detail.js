import catDetailApi from './cat-detail-api.js';

// refernce all the DOM elements we need to update

const owner = document.getElementById('owner');
const name = document.getElementById('name');
const age = document.getElementById('age');
const type = document.getElementById('type');
const color = document.getElementById('color');
const hair = document.getElementById('hair');
const indoor = document.getElementById('indoor');
const biscuits = document.getElementById('biscuits');
const love = document.getElementById('love');

// get our applicant from the API

const applicant = catDetailApi.get();

// no applicant? head back to home page

if(!applicant) {
    window.location = './';
}

// mediate data into elements 

owner.textContent = applicant.owner;
name.textContent = applicant.name;
age.textContent = applicant.age;
type.textContent = applicant.type;
color.textContent = applicant.color;
hair.textContent = applicant.hair;
indoor.textContent = applicant.indoor;
biscuits.textContent = applicant.biscuits;
love.textContent = applicant.love;
