import React from 'react';
import { S } from '../../HeaderMenu_Styles';

// Структура с точками назначения для каждой ссылки
const linksMap = new Map([
  ['Home', '#main'],
  ['Blog', '#posts'],
  ['About Us', '#about-us'],
  ['Contact Us', '#footer'],
]);

// Модифицированный компонент Menu
export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        const targetHref = linksMap.get(item) || ''; // Получаем соответствующую ссылку
        return (
          <S.MenuItem key={index}>
            <S.Link className="linkHeader" href={targetHref}>
              {item}
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};