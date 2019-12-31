export default function execute() {
    'use strict';

    let isOpen = true;

    const slideIn = function() {
        document.getElementById('sidebar').classList.remove('opened');        
        document.getElementById('sidebar').classList.add('closed');        
        isOpen = false;
    }

    const slideOut = function() {
        document.getElementById('sidebar').classList.add('opened');
        document.getElementById('sidebar').classList.remove('closed');        
        isOpen = true;
    }
    
    const slideInOut = function() {
        if (isOpen) {
            slideIn();
        } else {
            slideOut();
        }        
    }

    const init = function() {
        slideOut();
    }

    init();
    document.getElementById('the-icon').addEventListener('click', slideInOut);
}