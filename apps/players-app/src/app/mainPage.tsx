import { Carousel } from '@mantine/carousel';
import {useNavigate} from "react-router-dom";
import "../slider.scss";

export function MainPage() {
    const navigate = useNavigate();
  return (
    <div className='mainPage'>
        <Carousel sx={{ width: 1920 }} mx="auto" withIndicators height={500}  styles={{
            control: {
            '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
            },
            },
        }}>
        <Carousel.Slide  onClick={() => navigate('/players')}>
            <div className='sliderText'><h1>Piłkarze</h1></div>
        </Carousel.Slide>
        <Carousel.Slide>
            <div className='sliderText'><h1>Drużyny</h1></div>
        </Carousel.Slide>
        </Carousel>
    </div>
  );
}

export default MainPage;