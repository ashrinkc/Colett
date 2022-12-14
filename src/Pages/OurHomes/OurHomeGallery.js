import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbarr from "../../Components/Navbar/Navbar";

const OurHomeGallery = () => {
  const { id } = useParams();
  const [imageO, setImgO] = useState("");
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if (id == 1) {
      setImgO(
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGtpdGNoZW58ZW58MHx8MHx8&w=1000&q=80"
      );
      setName("London House");
      setLocation("London Streek, UK");
    }
    if (id == 2) {
      setImgO(
        "https://www.mydomaine.com/thmb/LTcSl4xP-NSzXtY3GIqoNvzH4DY=/1000x768/filters:fill(auto,1)/LavaInteriors11.11.24AM-5a287055ac2649f583c0d32b0e41211e.jpg"
      );
      setName("Manchester House");
      setLocation("Manchester Streek, UK");
    }
    if (id == 3) {
      setImgO(
        "http://cdn.home-designing.com/wp-content/uploads/2016/04/creative-home-layout-for-family-with-small-children.jpg"
      );
      setName("Liverpool House");
      setLocation("Liverpool Streek, UK");
    }
  }, [id]);
  return (
    <div>
      <Navbarr />
      <div className="homeGallery">
        <h1>{name}</h1>
        <h5>{location}</h5>
        <div className="mainGalleryh">
          <div className="galleryh">
            <div className="galleryHead">
              <div className="galleryHeadoneh">
                <div>
                  <img src={imageO} />
                </div>
                <div>
                  <img src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jfm-desktopmobile-1647870334-Gg4Ar/desktop-1647870346-QIByM/living-room-1647870431-TeyIb.png" />
                </div>
              </div>
              <div className="galleryHeadtwo">
                <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
              </div>
            </div>
            <div className="galleryMid">
              <img src="https://images.adsttc.com/media/images/5fa3/1962/63c0/1756/4c00/0062/large_jpg/LOCAL_MAISON_100__BOIS_01_Atelier_Vincent_Hecht_copy.jpg?1604524377" />
            </div>
            <div className="galleryHead">
              <div className="galleryHeadtwo">
                <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
              </div>
              <div className="galleryHeadoneh">
                <div>
                  <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGtpdGNoZW58ZW58MHx8MHx8&w=1000&q=80" />
                </div>
                <div>
                  <img src="https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jfm-desktopmobile-1647870334-Gg4Ar/desktop-1647870346-QIByM/living-room-1647870431-TeyIb.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHomeGallery;
