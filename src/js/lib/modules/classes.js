import $ from '../core';

$.prototype.addClass = function (...classNmaes) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNmaes);
    }
    return this;
};

$.prototype.removeClass = function (...classNmaes) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNmaes);
    }
    return this;
};

$.prototype.toggleClass = function (classNmaes) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNmaes);
    }
    return this;
};