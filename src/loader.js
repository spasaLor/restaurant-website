 export function initialLoad(){
    const content = document.querySelector('.content');
    const div1=document.createElement('div');
    div1.classList.add('black');
    const div2=document.createElement('div');
    div2.classList.add('text');
    const para=document.createElement('p');
    para.textContent="Welcome to restaurant";
    const h3=document.createElement('h3');
    h3.innerHTML="Georgian Food and Wine Experience<br>in San Francisco Bay Area";
    const btn=document.createElement('button');
    btn.type='button';
    btn.textContent="book a table";
    div2.append(para,h3,btn);
    div1.appendChild(div2);
    content.appendChild(div1);
    const div3=document.createElement('div');
    div3.classList.add('white');
    const div4=document.createElement('div');
    div4.classList.add('image');
    content.append(div4,div3);
}