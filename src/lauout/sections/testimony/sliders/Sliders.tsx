import React, { useState } from 'react';
import { Slide } from './slide/Slide';
import photo1 from '../../../../assets/images/JonatanVallem.webp'; 
import photo2 from '../../../../assets/images/ivanova alexandra.webp'; 
import photo3 from '../../../../assets/images/Koldunov brother.webp'; 
import arrowLeft from '../../../../assets/images/svg/ArrowLeft.svg'
import arrowRight from '../../../../assets/images/svg/ArrowRirht.svg'
import { S } from '../sliders/Sliders_Styles';



// Импортируем массив с изображениями авторов и информацией о них
const slidesData = [
  { id: 1, photoAvtor: photo1, name: 'Jonathan Vallem', adress: 'New York, USA' },
  { id: 2, photoAvtor: photo2, name: 'Alexandra Ivanova', adress: 'Hollywood, USA' },
  { id: 3, photoAvtor: photo3, name: 'Koldunov Brothers', adress: 'Texas, USA' },
];


export const Sliders = () => {
  // Хранит индекс текущего отображаемого слайда
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обработчик для перехода к следующему слайду
  const handleNextClick = () => {
    if (currentIndex === slidesData.length - 1) {
      setCurrentIndex(0); // Переход на первый слайд, если достигнут последний
    } else {
      setCurrentIndex(currentIndex + 1); // Перелистываем следующий слайд
    }
  };

  // Обработчик для перехода к предыдущему слайду
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slidesData.length - 1); // Переход на последний слайд, если достигнут первый
    } else {
      setCurrentIndex(currentIndex - 1); // Перелистываем предыдущий слайд
    }
  };

  return (
    <S.Sliders>
      {/* Отображаем активный слайд */}
      <Slide {...slidesData[currentIndex]} />
      
      {/* Кнопки навигации */}
    
<S.ResponsiveFlexWrapper>

    <S.ButtonBackBlock>   
      <S.BtnPrev onClick={handlePrevClick}><img src={arrowLeft} alt="картинка для кнопки перелистывания на левый отзыв" /></S.BtnPrev>
    </S.ButtonBackBlock>

    <S.ButtonBackBlock>
      <S.BtnNext onClick={handleNextClick}><img src={arrowRight} alt="картинка для кнопки перелистывания на правый отзыв" /></S.BtnNext>
    </S.ButtonBackBlock>

</S.ResponsiveFlexWrapper>



      
    </S.Sliders>
  );
};

