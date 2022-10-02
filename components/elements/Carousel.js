import { useEffect, useRef, useState } from "react";
import SponserCard from "./SponserCard";

const Carousel = ({cardList = [],carouselSize}) => {
  const cardContainer = useRef();
  const [carouselCardSize,setCarouselCardSize] = useState(360);

  useEffect(() => {

    const currentCardStyle = getComputedStyle(cardContainer.current.firstChild);
    
    const cardWidth = cardContainer.current.firstChild.offsetWidth;
    const cardMargin = parseInt(currentCardStyle.marginLeft.replace("px","")) + parseInt(currentCardStyle.marginRight.replace("px",""));

    setCarouselCardSize(cardMargin+cardWidth);

    const carouselInterval = setInterval(()=>{
      handleLeftMovement(cardList,carouselSize);
    },3000)

    return () => {
      clearInterval(carouselInterval);
    }
  },[carouselSize])


  const style = {
    width: carouselCardSize*carouselSize,
  }
  
  let counter = 0;

  const handleLeftMovement = (cardList,carouselSize) => {
    cardContainer.current.style.transform = `translateX(-${counter*carouselCardSize}px)`;
    counter = (counter+1)%(cardList.length - (carouselSize-1));
  }



  return (  
    <div style={style} className = "flex flex-row justify-start overflow-hidden">
      <div ref={cardContainer} className="flex flex-row duration-300" id="carousalCardContainer">
        {
          cardList.map((elem,idx) => {
            return(
              <SponserCard imgSrc={elem.imgSrc} key={idx}/>
            )
          })
        }
      </div>
    </div>
  );
}
 
export default Carousel;