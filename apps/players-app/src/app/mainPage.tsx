import { Carousel } from '@mantine/carousel';
import {useNavigate} from "react-router-dom";
import "../slider.scss";
import AuthorQuote from './authorQuote';
import Modules from './modules';

export function MainPage() {
    const navigate = useNavigate();
    return (
    <div className='mainPage'>
        <Carousel sx={{ width: "100%" }} mx="auto" withIndicators height={500}  styles={{
            control: {
            '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
            },
            },
        }}>
        <Carousel.Slide onClick={() => navigate('/players')}>
            <div className='sliderText'><h1>Piłkarze</h1></div>
        </Carousel.Slide>
        <Carousel.Slide onClick={() => navigate('/clubs')}>
            <div className='sliderText'><h1>Drużyny</h1></div>
        </Carousel.Slide>
        </Carousel>
        <Modules />
        <AuthorQuote />
    </div>
  );
}

export default MainPage;