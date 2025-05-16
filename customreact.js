function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

   for (const prop in reactElement.props) {
     if(prop==='children' ) continue;
     docElement.setAttribute(prop,reactElement.props[prop])
        
    }
   
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.co.in',
        target: '_blank'
    },
    children: ' Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);





