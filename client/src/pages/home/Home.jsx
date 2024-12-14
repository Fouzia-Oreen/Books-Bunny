import AudioBookSection from './Audiobook';
import BannerSection from './Banner';
import TestimonialSection from './Testimonial';
import HeroSection from './Hero';
import NewCollection from './NewCollection';
import RecommendedSection from './Recomended';
import ShopByCategorySection from './ShopByCategory';
import TopSellerSection from './Topseller';

const Home = () => {
  return (
    <div >
      <HeroSection />
      <ShopByCategorySection />
      <AudioBookSection />
      <NewCollection />
      <TopSellerSection />
      <RecommendedSection />
      <TestimonialSection /> 
      <BannerSection />
    </div>
  )
}

export default Home
