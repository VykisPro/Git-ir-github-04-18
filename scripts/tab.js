export default class Tab{
    constructor({name, source, isVideo, paragraphs}){
        this.name = name;
        this.source = source;
        this.isVideo = isVideo;
        this.paragraphs = paragraphs;
        return this.render();
    }
    render(){
        this.tab = document.createElement('section');
        this.tab.setAttribute('id', 'tab');
        this.topDiv = document.createElement('div');
        this.header = document.createElement('h1');
        this.headerText = document.createTextNode(this.name);
        this.header.appendChild(this.headerText);
        this.x = document.createElement('img');
        this.x.setAttribute('src', './images/resources/xmark-solid.svg');
        this.x.setAttribute('alt', 'close');
        this.topDiv.append(this.header, this.x);
        this.remove();

        if(this.isVideo === true){
            this.mediaElement = document.createElement('video');
            this.mediaElement.setAttribute('src', this.source);
            this.mediaElement.setAttribute('autoplay', '')
                    this.mediaElement.setAttribute('loop', '')
            this.mediaElement.setAttribute('muted', '')
        } else {
            this.mediaElement = document.createElement('img');
            this.mediaElement.setAttribute('src', this.source);
        }
        this.tab.append(this.topDiv, this.mediaElement)
        this.paragraphs.forEach(paragraphText => {
            this.par = document.createElement('p');
            this.parText = document.createTextNode(paragraphText);
            this.par.appendChild(this.parText);
            this.tab.appendChild(this.par);
        })
    
            this.headerSection = document.querySelector('header');
            this.headerSection.classList.add('displayNone');
    
            this.main = document.querySelector('main');
            this.main.classList.add('displayNone');
        document.querySelector('body').appendChild(this.tab)
        return this.tab
    }
    remove(){
        (this.x).addEventListener('click', () => {            
            this.tab.remove();
            this.headerSection.classList.remove('displayNone');
            this.main.classList.remove('displayNone');

        })
    }

}