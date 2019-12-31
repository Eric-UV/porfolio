export default function() {
    'use strict';
    let page = {
        title: '',        
        template: ''
    };

    page.title = 'About me';    

    page.template = `<h1>{{title}}</h1>
                    <hr>
                    <div id="about-container">
                        <h1 class="title"><span class="stand-out-text">Eric D</span>. Gómez</h1>                                                
                        <p>28A GENOVA STREET · CIUDAD DEL VALLE · EDELGADILLO@UNITEDVIRTUALITIES.COM</p>
                        <br>
                        <p>I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. 
                            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                        </p>
                        <br>
                        <div>
                            <a href="https://github.com/Eric-UV?tab=repositories"><i class="fab fa-github social-icon"></i></a>
                            <a href="#"><i class="fab fa-facebook social-icon"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in social-icon"></i></a>
                            <a href="#"><i class="fab fa-twitter-square social-icon"></i></a>
                        </div>                        
                    </div>`;

    return page;
}