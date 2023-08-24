import BusinessNewsSection from "./components/BusinessNewsSection";
import PhotoGallerySection from "./components/PhotoGallerySection";
// import MoreNewsFromBusiness from "./components/MoreNewsFromBusiness";

// importing style sheets
import './styles/businessHomepage.css';
import './styles/businessNewsSection.css';
import './styles/newsTitleWithDivider.css';
import './styles/photoGallerySection.css';
import './styles/photoGalleryCard.css';
// import './styles/moreNewsFromBusiness.css';



function BusinessHomepage() {

  return (
    <section className="app">
        <main>
          <BusinessNewsSection />
          <PhotoGallerySection />
          {/* <MoreNewsFromBusiness /> */}
        </main>
        <aside>

        </aside>
    </section>
  )
}

export default BusinessHomepage;
