import '../../../components/pageHeader/pageHeader'
import { Component } from "../../templates/components";
import { PageId } from "../../../pages/app/app";



export class Footer extends Component {
  constructor(tagName: string, className: string){
    super(tagName, className)
  }

renderPageButtons(){
       const pageBFooter = document.createElement('div');
       pageBFooter.classList.add('footer__container')
       pageBFooter.innerHTML=
  
  `
    <a href="#"><img src="" alt="GitHub"></a>
    <a href="#"><img src="" alt="RS School"></a>
    <span>©2023</span>

`


  this.container.append(pageBFooter)
}

  render (){
    this.renderPageButtons()
    return  this.container;
  }
}
