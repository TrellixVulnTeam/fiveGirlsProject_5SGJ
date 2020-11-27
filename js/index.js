

document.querySelector('body').insertAdjacentHTML('afterbegin', `
<nav class="nav">
<img src="img.partnerIcon/logo.png" alt="" class="nav__logo">
<div class="nav__box">
    <a href="index.html" class="nav__menu">Home</a>
    <a href="ContactUs.html" class="nav__menu">Contact Us</a>
</div>
</nav>

<div class="navigation">

<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
<label for="navi-toggle" class="navigation__button">
    <div class="navigation__icon">&nbsp;</div>
</label>

<div class="navigation__background">&nbsp;</div>

<nav class="navigation__nav">
    <ul class="navigation__list">
        <li class="navigation__item"><a href="index.html" class="navigation__link">Home</a></li>
        <li class="navigation__item"><a href="OurProgammes.html" class="navigation__link">Programme</a></li>
        <li class="navigation__item"><a href="Media.html" class="navigation__link">Media</a></li>
        <li class="navigation__item"><a href="Events.html" class="navigation__link">Events</a></li>
        <li class="navigation__item"><a href="OurTeam.html" class="navigation__link">Our Team</a></li>
        <li class="navigation__item"><a href="Workshops.html" class="navigation__link">Workshops</a></li>
        <li class="navigation__item"><a href="Enterprise.html" class="navigation__link">Enterprise</a></li>
        <li class="navigation__item"><a href="Research.html" class="navigation__link">Research</a></li>
        <li class="navigation__item"><a href="RealEnterprise.html" class="navigation__link">Real Enterprise</a></li>
        <li class="navigation__item"><a href="Blog.html" class="navigation__link">Blog</a></li>
        <li class="navigation__item"><a href="ContactUs.html" class="navigation__link">Contact Us</a></li>
    </ul>
</nav>

</div>
</div>


<nav class="small-nav">

<div class="dropdown">
 
    <ul>
        <li>Programme
            <ul  class="dropdown__link">
                <li><a href="OurProgammes.html">Our Programme</a></li>
                <li><a href="Workshops.html">Workshop</a></li>
                <li><a href="Enterprise.html">Enterprise</a></li>
            </ul>
        </li>
    </ul>
   
   <ul>
    <li>Media
        <ul  class="dropdown__link">
            <li><a href="Events.html">Events</a></li>
            <li><a href="Blog.html">Blog</a></li>
            <li><a href="Research.html">Research & Pub</a></li>
        </ul>
    </li>

   </ul>
 
    <ul>
        <li>Real Enterprise
            <ul  class="dropdown__link">
                <li><a href="OurTeam.html">Our Team</a></li>
            </ul>
        </li>
    </ul>
</div>
</nav>`);


document.querySelector('body').insertAdjacentHTML('beforeend', `

<section class="partners">

<h2 class=" partners__title">Partners with</h2>

<div class="partners__box">
    <img src="img.partnerIcon/speech.png" alt="" class="partners__icon">
    <img src="img.partnerIcon/ted.png" alt="" class="partners__icon">
    <img src="img.partnerIcon/you.png" alt="" class="partners__icon">
    <img src="img.partnerIcon/ispace.png" alt="" class="partners__icon">
</div>
</section>


<footer class="footer">
        
<div class="footer__box">

    <h2 class="footer__social-text">Find Us On Social Media</h2>

    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>facebook-with-circle</title>
            <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM12.274 7.034h-1.443c-0.171 0-0.361 0.225-0.361 0.524v1.042h1.805l-0.273 1.486h-1.532v4.461h-1.703v-4.461h-1.545v-1.486h1.545v-0.874c0-1.254 0.87-2.273 2.064-2.273h1.443v1.581z"></path>
            </svg>
    </div>

    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>twitter-with-circle</title>
            <path d="M10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6zM13.905 8.264c0.004 0.082 0.005 0.164 0.005 0.244 0 2.5-1.901 5.381-5.379 5.381-1.068 0-2.062-0.312-2.898-0.85 0.147 0.018 0.298 0.025 0.451 0.025 0.886 0 1.701-0.301 2.348-0.809-0.827-0.016-1.525-0.562-1.766-1.312 0.115 0.021 0.233 0.033 0.355 0.033 0.172 0 0.34-0.023 0.498-0.066-0.865-0.174-1.517-0.938-1.517-1.854v-0.023c0.255 0.141 0.547 0.227 0.857 0.237-0.508-0.34-0.841-0.918-0.841-1.575 0-0.346 0.093-0.672 0.256-0.951 0.933 1.144 2.325 1.896 3.897 1.977-0.033-0.139-0.049-0.283-0.049-0.432 0-1.043 0.846-1.891 1.891-1.891 0.543 0 1.035 0.23 1.38 0.598 0.431-0.086 0.835-0.242 1.2-0.459-0.141 0.441-0.44 0.812-0.831 1.047 0.383-0.047 0.747-0.148 1.086-0.299-0.253 0.379-0.574 0.713-0.943 0.979z"></path>
            </svg>
    </div>

    <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>instagram-with-circle</title>
        <path d="M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z"></path>
        </svg>
    </div>

     <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>email</title>
            <path d="M14.608 12.172c0 0.84 0.239 1.175 0.864 1.175 1.393 0 2.28-1.775 2.28-4.727 0-4.512-3.288-6.672-7.393-6.672-4.223 0-8.064 2.832-8.064 8.184 0 5.112 3.36 7.896 8.52 7.896 1.752 0 2.928-0.192 4.727-0.792l0.386 1.607c-1.776 0.577-3.674 0.744-5.137 0.744-6.768 0-10.393-3.72-10.393-9.456 0-5.784 4.201-9.72 9.985-9.72 6.024 0 9.215 3.6 9.215 8.016 0 3.744-1.175 6.6-4.871 6.6-1.681 0-2.784-0.672-2.928-2.161-0.432 1.656-1.584 2.161-3.145 2.161-2.088 0-3.84-1.609-3.84-4.848 0-3.264 1.537-5.28 4.297-5.28 1.464 0 2.376 0.576 2.782 1.488l0.697-1.272h2.016v7.057h0.002zM11.657 9.004c0-1.319-0.985-1.872-1.801-1.872-0.888 0-1.871 0.719-1.871 2.832 0 1.68 0.744 2.616 1.871 2.616 0.792 0 1.801-0.504 1.801-1.896v-1.68z"></path>
            </svg>
     </div>

</div>


</footer>

<footer class="footer__bottom">
<img src="img.partnerIcon/logo.png" alt="" class="footer__logo">

<a class="footer__text" href="">About</a>
<a class="footer__text" href="">Privacy Policy</a>
<a class="footer__text" href="">Cookie Policy</a>
<a class="footer__text" href="">Sitemap</a>
</footer>`);
