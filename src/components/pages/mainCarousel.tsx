import Photo from '../atoms/photo';
import Carousel from '../carousel';

export default function MainCarousel() {
  return (
    <Carousel>
      <Photo
        key={0}
        src="/images/carouselItem1.jpeg"
        alt="재구매 인기템만 한자리에! 육개장/진짜장 외 오뚜기 인기라면 특가"
      />
      <Photo
        key={1}
        src="/images/carouselItem2.jpeg"
        alt="카카오페이 카드 15% 할인 LG전자 ~52% 특가 연말 결산 세일"
      />
      <Photo
        key={2}
        src="/images/carouselItem3.jpeg"
        alt="주방/생활가전 ~58% 특가 대용량 퀵 파워워시 밀레 식기세척기 외"
      />
    </Carousel>
  );
}
