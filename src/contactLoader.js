export function loadContact(){
    const content = document.querySelector('.content');
    content.innerHTML='';
    const div1=document.createElement('div');
    div1.classList.add('contact');
    const h2=document.createElement('h2');
    h2.textContent='contact us';
    h2.classList.add('main');
    div1.appendChild(h2);

    const div2=document.createElement('div');
    div2.classList.add('inputs');
    const in1 = document.createElement('input');
    in1.type='text';
    in1.name='name';
    in1.id='name';
    in1.placeholder='Your name... *';
    const in2 = document.createElement('input');
    in2.type='text';
    in2.name='mail';
    in2.id='mail';
    in2.placeholder='Your mail... *';
    const in3 = document.createElement('input');
    in3.type='text';
    in3.name='phone';
    in3.id='phone';
    in3.placeholder='Your phone... *';
    const in4=document.createElement('textarea');
    in4.rows='15';
    in4.name='msg';
    in4.id='msg';
    in4.placeholder='Message... *';
    const btn1=document.createElement('button');
    btn1.type='button';
    btn1.textContent='send message';
    div2.append(in1,in2,in3,in4,btn1);
    div1.appendChild(div2);

    const div3=document.createElement('div');
    div3.classList.add('contacts');
    const div4=document.createElement('div');
    div4.classList.add('card');
    const span1=document.createElement('span');
    span1.classList.add('material-symbols-outlined');
    span1.textContent='location_on';
    const h31=document.createElement('h3');
    h31.textContent='Postal Address';
    const p1=document.createElement('p');
    p1.innerHTML='The Company Name 9863-9867<br>Mill Road, cambridge, MG09 99HT.';
    div4.append(span1,h31,p1);
    div3.appendChild(div4);

    const div5=document.createElement('div');
    div5.classList.add('card');
    const span2=document.createElement('span');
    span2.classList.add('material-symbols-outlined');
    span2.textContent='call';
    const h32=document.createElement('h3');
    h32.textContent='Phones';
    const p2=document.createElement('p');
    p2.innerHTML='Phone: +39 093 245 0678 <br> Fax: +39 093 223 3456';
    div5.append(span2,h32,p2);
    div3.appendChild(div5);

    const div6=document.createElement('div');
    div6.classList.add('card');
    const span3=document.createElement('span');
    span3.classList.add('material-symbols-outlined');
    span3.textContent='mail';
    const h33=document.createElement('h3');
    h33.textContent='Mail';
    const p3=document.createElement('p');
    p3.textContent='mail@demolink.org';
    div6.append(span3,h33,p3);
    div3.appendChild(div6);
    div1.appendChild(div3);
    content.appendChild(div1);
}