import React from 'react'

const BannerSection = () => {

  const scrollToProduct = () => {
    const scrollTo = document.getElementById("products");
    scrollTo.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div>
      <div className="w-[100vw]">
        <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
          <div className="container mx-auto flex justify-around h-full">
            <div className="flex flex-col justify-center">
              <div className="font-semibold flex items-center uppercase">
                <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
              </div>
              <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
                Fresh Fashion Finds
                <br />
                <span className="font-light text-lg">new collection</span>
              </h1>
              <a className="self-start uppercase font-semibold border-b-2 border-primary text-2xl cursor-pointer"
                onClick={scrollToProduct}
              >
                Discover More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BannerSection