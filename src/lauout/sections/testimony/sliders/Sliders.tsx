import React, { useState } from 'react';
import styled from 'styled-components';
import { Slide } from './slide/Slide';
import photo1 from '../../../../assets/images/JonatanVallem.webp'; 
import photo2 from '../../../../assets/images/ivanova alexandra.webp'; 
import photo3 from '../../../../assets/images/Koldunov brother.webp'; 
import arrowLeft from '../../../../assets/images/svg/ArrowLeft.svg'
import arrowRight from '../../../../assets/images/svg/ArrowRirht.svg'
import { FlexWrapper } from '../../../../components/FlexWrapper';



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
    <StyleSliders>
      {/* Отображаем активный слайд */}
      <Slide {...slidesData[currentIndex]} />
      
      {/* Кнопки навигации */}
    
<ResponsiveFlexWrapper>

    <ButtonBackBlock>   
      <BtnPrev onClick={handlePrevClick}><img src={arrowLeft} alt="картинка для кнопки перелистывания на левый отзыв" /></BtnPrev>
    </ButtonBackBlock>

    <ButtonBackBlock>
      <BtnNext onClick={handleNextClick}><img src={arrowRight} alt="картинка для кнопки перелистывания на правый отзыв" /></BtnNext>
    </ButtonBackBlock>

</ResponsiveFlexWrapper>



      
    </StyleSliders>
  );
};

const StyleSliders = styled.div`
    display: flex;
    
`
const ResponsiveFlexWrapper = styled(FlexWrapper)`
  align-items: flex-end;
  max-height: 330px;
  margin: auto 0;
`



const ButtonBackBlock = styled.div`
    width: 62px;
    height: 62px;
    position: relative;
`


const BtnNext = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: black;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;

    &:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`
const BtnPrev = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: aliceblue;
    border: none;
    position: absolute;
    top: 12.5%;
    left: 12.5%;

&:Hover{
        top: 5%;
        left: 5%;
        width: 62px;
        height: 62px;  
        position: absolute;     
    }
`

