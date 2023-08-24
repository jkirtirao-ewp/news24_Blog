import CricketNewsSection from "./components/CricketNewsSection";
import PhotoGallerySection from "./components/PhotoGallerySection";
// import MoreNewsFromCricket from "./components/MoreNewsFromCricket";

// importing style sheets
import './styles/cricketHomepage.css';
import './styles/cricketNewsSection.css';
import './styles/newsTitleWithDivider.css';
import './styles/photoGallerySection.css';
import './styles/photoGalleryCard.css';
// import './styles/moreNewsFromCricket.css';



function CricketHomepage() {

  return (
    <section className="app">
        <main>
          <CricketNewsSection />
          <PhotoGallerySection />
          {/* <MoreNewsFromCricket /> */}
        </main>
        <aside>

        </aside>
    </section>
  )
}

export default CricketHomepage;
