import { useEffect, useRef } from "react";
import SponserCard from "./SponserCard";

const Carousel = ({cardList = [],carouselSize}) => {
  const cardContainer = useRef();

  useEffect(() => {

    const carouselInterval = setInterval(()=>{
      handleLeftMovement(cardList,carouselSize);
    },3000)

    return () => {
      clearInterval(carouselInterval);
    }
  },[carouselSize])

  const carouselCardSize = 360;

  const style = {
    width: carouselCardSize*carouselSize,
  }
  
  let counter = 0;

  const handleLeftMovement = (cardList,carouselSize) => {
    cardContainer.current.style.transform = `translateX(-${counter*carouselCardSize}px)`;
    counter = (counter+1)%(cardList.length - (carouselSize-1));
  }



  return (  
    <div style={style} className = "flex flex-row content-center overflow-hidden">
      <div ref={cardContainer} className="flex flex-row duration-300" id="carousalCardContainer">
        {
          cardList.map((elem) => {
            return(
              <SponserCard imgSrc={elem.imgSrc}/>
            )
          })
        }
      </div>
    </div>
  );
}
 
export default Carousel;