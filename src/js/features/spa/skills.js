export default function() {
    'use strict';
    let page = {
        title: '',        
        template: ''
    };

    page.title = 'Skills';    

    page.template = `<h1>{{title}}</h1>
                    <hr>
                    <div id="skills-container">
                        <h3>PROGRAMMING LANGUAGES & TOOLS</h3>
                        <br>
                        <div>
                            <a><i class="fab fa-html5 social-icon"></i></a>
                            <a><i class="fab fa-css3-alt social-icon"></i></a>
                            <a><i class="fab fa-js social-icon"></i></a>
                            <a><i class="fab fa-node-js social-icon"></i></a>
                            <a><i class="fab fa-sass social-icon"></i></a>
                            <a><i class="fab fa-npm social-icon"></i></a>
                            <a><i class="fab fa-bootstrap social-icon"></i></a>
                        </div>
                        <br>
                        <h3>WORKFLOW</h3>
                        <br>
                        <div>
                            <ul id="workflow-list">
                                <li><a>Mobile-First, Responsive Design</a></li>
                                <li><a>Cross Browser Testing & Debugging</a></li>
                                <li><a>Cross Functional Teams</a></li>
                                <li><a>Agile Development & Scrum</a></li>
                            </ul>
                        </div>
                    </div>`;

    return page;
}