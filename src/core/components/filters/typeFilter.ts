export class TypeFilter {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('ul');
    this.container.classList.add('type-filter__list');
  }

  private getTypes(category: string): Array<Array<string>> | null {
    switch (category) {
      case 'weapon':
        return [
          ['melee', 'Оружие ближнего боя'],
          ['shooter', 'Стрелковое оружие'],
        ];
      case 'armor':
        return [
          ['body', 'Защита корпуса'],
          ['hand', 'Защита рук'],
          ['head', 'Защита головы'],
          ['foot', 'Защита ног'],
        ];
      case 'costumes':
        return [
          ['haberdashery', 'Галантерея'],
          ['outerwear', 'Верхняя одежда'],
          ['shoes', 'Обувь'],
        ];
      case 'jewelry':
        return [
          ['hat', 'Головные уборы'],
          ['earrings', 'Серьги'],
          ['rings', 'Кольца'],
        ];
      case 'houseHold':
        return [
          ['crockery', 'Посуда'],
          ['tools', 'Инструменты'],
          ['cover', 'Укрытия'],
          ['other', 'Прочее'],
        ];
      default:
        return null;
    }
  }

  private createTypeItem(item: string[]): HTMLElement {
    const typeItem = document.createElement('li');
    typeItem.classList.add('type-filter__item');

    const typeItemCheckbox = document.createElement('input');
    typeItemCheckbox.setAttribute('id', item[0]);
    typeItemCheckbox.setAttribute('type', 'checkbox');

    const typeItemLabel = document.createElement('label');
    typeItemLabel.setAttribute('for', item[0]);
    typeItemLabel.textContent = item[1];

    typeItem.append(typeItemCheckbox, typeItemLabel);
    return typeItem;
  }

  public render(category: string): HTMLElement {
    const typeList = this.getTypes(category);
    if (typeList !== null) {
      const fragment = new DocumentFragment();
      typeList.forEach((item) => {
        fragment.append(this.createTypeItem(item));
      });
      this.container.append(fragment);
    } else {
      const typeItem = document.createElement('li');
      typeItem.classList.add('type-filter__item');
      typeItem.textContent = 'Выберите категорию';
      this.container.append(typeItem);
    }

    return this.container;
  }
}
