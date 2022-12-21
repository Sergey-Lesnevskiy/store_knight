import '../../../components/pageHeader/pageHeader'
import { Component } from "../../templates/components";
import { PageId } from "../../../pages/app";

const Button = [
  {
    id: PageId.MainPage,
    text: 'Main Page'
  },
  {
    id: PageId.CartPage,
    text: 'Cart Page'
  },
  {
    id: PageId.ProductPage,
    text: 'Product Page'
  }
]

export class Header extends Component {
  constructor(tagName: string, className: string){
    super(tagName, className)
  }

renderPageButtons(){
       const pageButtons = document.createElement('div');
       pageButtons.innerHTML=
  
  `<header class="header">
  <div class="header__container">

    <a href="#" class="header__logo">
      <img src="./images/icons/arrow-down.svg" alt="store logotype">
    </a>

    <div class="header__menu menu">

      <button class="button menu__icon" aria-label="menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="menu__body" aria-label="site navigation">
        <ul class="menu__list">
          <li class="menu__item">
            <a href=#${PageId.MainPage} class="menu__link">Каталог</a>
          </li>
          <li class="menu__item">
            <a href=#${PageId.CartPage} class="menu__link">Корзина</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">О нас</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 20.5C19.0376 20.5 21.5 18.0376 21.5 15C21.5 11.9624 19.0376 9.5 16 9.5C12.9624 9.5 10.5 11.9624 10.5 15C10.5 18.0376 12.9624 20.5 16 20.5Z" />
                <path
                  d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9934 12.5542 27.6216 9.25145 25.1851 6.81491C22.7486 4.37837 19.4458 3.00661 16 3ZM24.225 23.3C23.4155 22.1388 22.3724 21.1596 21.1625 20.425C19.7733 21.7559 17.9238 22.4989 16 22.4989C14.0762 22.4989 12.2267 21.7559 10.8375 20.425C9.62759 21.1596 8.58448 22.1388 7.77501 23.3C6.36723 21.7147 5.44757 19.7564 5.12671 17.6607C4.80585 15.565 5.09746 13.4212 5.96644 11.4873C6.83543 9.55346 8.24477 7.91192 10.0248 6.76028C11.8049 5.60863 13.8799 4.99593 16 4.99593C18.1201 4.99593 20.1951 5.60863 21.9752 6.76028C23.7552 7.91192 25.1646 9.55346 26.0336 11.4873C26.9026 13.4212 27.1942 15.565 26.8733 17.6607C26.5524 19.7564 25.6328 21.7147 24.225 23.3Z" />
              </svg>
            </a>
          </li>
          <li class="menu__item">
            <a href=#${PageId.CartPage} class="menu__link">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.9875 8.175L26.4625 16.5375C26.3367 17.2283 25.9726 17.8531 25.4335 18.3031C24.8945 18.753 24.2147 18.9997 23.5125 19H9.0125L9.5625 22H23C23.5933 22 24.1734 22.1759 24.6667 22.5056C25.1601 22.8352 25.5446 23.3038 25.7716 23.8519C25.9987 24.4001 26.0581 25.0033 25.9424 25.5853C25.8266 26.1672 25.5409 26.7018 25.1213 27.1213C24.7018 27.5409 24.1672 27.8266 23.5853 27.9424C23.0033 28.0581 22.4001 27.9987 21.8519 27.7716C21.3038 27.5446 20.8352 27.1601 20.5056 26.6667C20.1759 26.1734 20 25.5933 20 25C20.0001 24.6591 20.0593 24.3207 20.175 24H12.825C12.9407 24.3207 12.9999 24.6591 13 25C13.0009 25.484 12.8847 25.9611 12.6612 26.3905C12.4378 26.8198 12.1138 27.1888 11.7169 27.4658C11.3199 27.7428 10.8619 27.9196 10.3818 27.9812C9.90167 28.0428 9.4138 27.9873 8.9598 27.8195C8.5058 27.6517 8.09915 27.3765 7.77456 27.0174C7.44996 26.6583 7.21707 26.2261 7.09576 25.7575C6.97444 25.2889 6.96831 24.7979 7.07788 24.3265C7.18746 23.855 7.40948 23.4171 7.725 23.05L4.2625 4H2C1.73478 4 1.48043 3.89464 1.29289 3.70711C1.10536 3.51957 1 3.26522 1 3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H4.2625C4.7293 2.00102 5.18104 2.16529 5.53946 2.46435C5.89787 2.76342 6.14039 3.17843 6.225 3.6375L6.8375 7H27C27.146 7.0003 27.2901 7.03297 27.4219 7.09565C27.5538 7.15834 27.6701 7.24947 27.7625 7.3625C27.8592 7.47198 27.9297 7.60203 27.9687 7.7428C28.0077 7.88358 28.0141 8.03137 27.9875 8.175Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  </div>
</header>`

  // Button.forEach((button) => {
  //   const buttonHTML = document.createElement('a');
  //   buttonHTML.href = `#${button.id}`  
  //   buttonHTML.innerHTML = button.text;
  //   pageButtons.append(buttonHTML);
  // })
  this.container.append(pageButtons)
}

  render (){
    this.renderPageButtons()
    return  this.container;
  }
}
