import codeURL from './code.png';

const img = document.createElement('img');
// src becomes a data URI of the image
img.src = codeURL;
img.style = "background: #2b3a42; padding: 20px;";
img.width = 32;
document.body.appendChild(img);