
import './style.css';
import emptyImage from './images/empty.png'
import coffeImage from './images/coffe.png'
import cupCoffee from './images/cupcoffe.png'
import github from './images/github.png'
import coffeShop from './images/coffeshop.jpg'
import todoList from './images/TodoList.png'
import battleship from './images/battleship.png'
import linkedinIcon from './images/linkedin.png'
import instagramIcon from './images/instagram.png'
import cup from './images/cup.png'
import weatherapp from './images/weatherapp.png'
import githubicon from './images/githubicon.png'

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');


    body.innerHTML = `
    <header>
    <div>
    <img src="${cup}" alt="">
    <h1>Adrian Lara</h1>
    </div>
    <nav>
        <ul>
            <li><a href="#banner">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </header>

    <main>
    <section class="banner" id="banner">
    </section>
    <section class="about" id="about">
        <div>
            <h1><span>01.</span>About</h1>
            <img src="${cupCoffee}" alt="">
        </div>
        
        <p class="box-text">Hello, I'm Adrian, a Full Stack Web Developer.</p>
        <p>Allow me to introduce myself: I've always had a passion for building things. 
            As a child, I would take things apart just to put them back together,
            over and over again. Now, as a web developer, I have the ability to create and 
            innovate as I see fit. I'm dedicated to continuous learning, 
            and I'm constantly seeking opportunities to enhance my skills.</p>
    </section>
    <section class="work" id="work">
        <h1><span>02.</span>My Work</h1>
        <div>
            <div>
                <img src="${battleship}" alt="">
                <h3><a href="https://adrian1lara.github.io/battleship/" target="_blank">BattleShip Game</a></h3>
                <p>This is a game where you will attack enemy ships while trying to discover their positions. Yellow squares indicate a miss, red ones signify a hit, and blue squares represent your own ships.</p>
            </div>
            <div>
                <img src="${todoList}" alt="">
                <h3><a href="https://adrian1lara.github.io/Todo-List/" target="_blank">Todo List</a></h3>
                <p>In TodoList, you can store notes regarding your tasks, indicate their importance level, and set a date. Using this data, you can access both the "Important" and "Today" sections.</p>
            </div>
            <div>
                <img src="${weatherapp}" alt="">
                <h3><a href="https://adrian1lara.github.io/Weather-App/" target="_blank">Wheather App</a></h3>
                <p>In weather app, you can get the weather of your city. If you enter a city name, you will see the weather of that city. You can also choose the country of your city.</p>
            </div>
        </div>
    
    </section>
    <section class="contact" id="contact">
        <h1><span>03.</span>Contact</h1>
        <div>
        <h2>WANT TO GET IN TOUCH?</h2>
        <button id="copy-email">adrianlara203@gmail.com</button><span id="spanElement"></span>
        <div>
            <a href="https://www.linkedin.com/in/gustavo-adrian-lara-441b70243/" target="_blank"><img src="${linkedinIcon}" alt=""></a>
            <a href="https://www.instagram.com/adrian1lara/" target="_blank"><img src="${instagramIcon}" alt=""></a>
            <a href="https://github.com/adrian1lara" target="_blank"><img src="${githubicon}" alt=""></a>
        </div>
        </div>
    </section>

    </main>
    <footer>
    <p>&copy; 2023 adrian1lara </p>
    <img src="${github}" alt="">
    </footer>`


    const copyEmailButton = document.getElementById('copy-email');
    const spanElement = document.getElementById('spanElement');
    
    copyEmailButton.addEventListener('click', () => {
        const emailToCopy = 'adrianlara203@gmail.com'; // Dirección de correo electrónico que quieres copiar
        const textArea = document.createElement('textarea');
        
        textArea.value = emailToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        spanElement.textContent = '  Copied! ❤';
        setTimeout(() => {
            spanElement.textContent = '';
        }, 2000); 
    });
});






