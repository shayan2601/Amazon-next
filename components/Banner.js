import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1Resized from "./images/banner/image1Resized.png";

function Banner() {
  return (
    <div className="md:relative px-10 mx-auto">
      <div className="absolute md:inline-flex md:bottom-0 md:h-32 md:z-20 md:w-full md:bg-gradient-to-t md:from-gray-400 md:to-transparent hidden" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={true}
        interval={3000}
      >
        <div>
          <img
            className="md:h-96 h-66"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <img
            className="md:h-96 h-66"
            loading="lazy"
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <img
            className="md:h-96 h-66"
            loading="lazy"
            src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600"
          />
        </div>
        <div>
          <img
            className="md:h-96 h-66"
            loading="lazy"
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwc3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <img
            className="md:h-96 h-66"
            loading="lazy"
            src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwc3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <img
            className="md:h-96 h-66"
            loading="lazy"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
