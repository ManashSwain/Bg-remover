import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function BackgroundRemover() {
  return (
    <section className="my-2 px-4">
      <h1 className=" title-font text-center text-gray-600 font-bold text-2xl sm:text-4xl mb-6">
        Remove Background with High Quality and Accuracy
      </h1>
      <div className="mt-16 w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] h-[40vh] sm:h-[50vh] m-auto z-10 mb-20">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="withoutbg.png" alt="Before" />}
          itemTwo={<ReactCompareSliderImage src="withbg.jpg" alt="After" />}
        />
      </div>
    </section>
  );
}
