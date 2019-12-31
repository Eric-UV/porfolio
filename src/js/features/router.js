import about from './spa/about';
import education from './spa/education';
import experience from './spa/experience';
import skills from './spa/skills';
import handlebars from 'handlebars';

export default function() {
    'use strict';

    const onRouteChange = function() {
        let template = '';
        let html = '';
        if (this.id != undefined && this.id != 'the-icon') {            
            switch (this.id) {
                case 'about': 
                    template = handlebars.compile(about().template);
                    html = template(about());
                    break;
                case 'education':
                    template = handlebars.compile(education().template);
                    html = template(education());
                    break;
                case 'experience':
                    template = handlebars.compile(experience().template);
                    html = template(experience());
                    break;
                case 'skills':
                    template = handlebars.compile(skills().template);
                    html = template(skills());
                    break;            
            }
            document.getElementById('main-container').innerHTML = html;
        }                
    }

    document.querySelectorAll('a').forEach(e => {
        e.addEventListener('click', onRouteChange);
    })
}