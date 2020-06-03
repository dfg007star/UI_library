import $ from '../core';

$.prototype.hasAtt = function (name) {
  for (let i = 0; i < this.length; i++) {
    return this[i].hasAttribute(name);
  }
};

$.prototype.getAtt = function (name) {
  for (let i = 0; i < this.length; i++) {
    return this[i].getAttribute(name);
  }
};

$.prototype.setAtt = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (name === 'ckecked' && !value) {
      return this[i].checked;
    } else {
      return this[i].setAttribute(name, value);
    }
  }
};

$.prototype.removeAtt = function (name) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(name);
  }
  return this;
};
