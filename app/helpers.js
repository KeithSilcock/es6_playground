import jquery from 'jquery';

export function addToDom(text){
    jquery('#root').append(text);
}