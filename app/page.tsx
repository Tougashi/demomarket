import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import HeroCarousel from './components/HeroCarousel';
import ProductCarousel from './components/ProductCarousel';
import CategorySections from './components/CategorySections';
import RecommendedSection from './components/RecommendedSection';
import PromotionalBanner from './components/PromotionalBanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Product Carousel */}
      <ProductCarousel />
      
      {/* Promotional Banner */}
      <PromotionalBanner />
      
      {/* Category Sections */}
      <CategorySections />
      
      {/* Recommended Section */}
      <RecommendedSection />
      
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
