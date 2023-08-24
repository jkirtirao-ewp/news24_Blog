// import CricketNewsSection from "./components/CricketNewsSection";
// import PhotoGallerySection from "./components/PhotoGallerySection";
// // import MoreNewsFromCricket from "./components/MoreNewsFromCricket";

// // importing style sheets
// import './styles/App.css';
// import './styles/cricketNewsSection.css';
// import './styles/newsTitleWithDivider.css';
// import './styles/photoGallerySection.css';
// import './styles/photoGalleryCard.css';
// // import './styles/moreNewsFromCricket.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CricketHomepage from "./pages/cricket/CricketHomepage";
import BusinessHomepage from "./pages/business/businessHomepage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
					path="/cricket"
					element={<CricketHomepage />}
				/>

        <Route
					path="/business"
					element={<BusinessHomepage />}
				/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
