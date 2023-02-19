import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { breakpoints, paths } from 'src/App/constants';
import { H1 } from 'src/design/H1';
import { Link } from 'src/components/Link';
import { Text } from 'src/design/Text';
import slides from './slides';

const { menu } = paths;

const Tutorial = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <StyedH1>Tutorial:</StyedH1>
        <Swiper spaceBetween={20} slidesPerView={1} onSlideChange={() => console.log('slide change')}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
        <Link to={menu}>
          <Back>Назад в меню</Back>
        </Link>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Tutorial;

const OuterContainer = styled('div')`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled('div')`
  max-width: 700px;
  max-height: 90vh;
  height: max-content;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.core.background.primary};
  padding: 24px 90px;
  border-radius: 20px;

  @media (max-width: ${breakpoints.mobileM}) {
    padding: 12px 14px;
  }
`;

const StyedH1 = styled(H1)`
  text-align: center;
  margin-bottom: 20px;
`;

const Back = styled(Text)`
  margin-top: 10px;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;
