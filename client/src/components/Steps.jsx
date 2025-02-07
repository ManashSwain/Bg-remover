const Steps = () => {
  return (
    <>
    <section className="text-gray-600 body-font mt-6">
        <h1 className="text-center font-bold text-5xl">Steps to remove background</h1>
        <h1 className="text-center font-bold text-5xl mt-2"> image in seconds.</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24   inline-flex items-center justify-center">
          <img src="uploadImage.png" alt="uploadimage" className="w-24 h-24" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold title-font text-gray-900 mb-1 text-2xl">Upload Image</h2>
          <p className="leading-relaxed">Select or drag & drop an image to get started. Our AI will process it instantly.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center  bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-24   inline-flex items-center justify-center">
          <img src="processing.png" alt="uploadimage" className="w-24 h-24" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold title-font text-gray-900 mb-1 text-2xl">Remove Background </h2>
          <p className="leading-relaxed">Let our advanced AI automatically detect and remove the background with high precision.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center  bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-24   inline-flex items-center justify-center">
          <img src="downloadImage.png" alt="uploadimage" className="w-24 h-24" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold title-font text-gray-900 mb-1 text-2xl">Download Image </h2>
          <p className="leading-relaxed">Get your high-quality, background-free image in seconds, ready for any use. 🚀</p>
        </div>
      </div>
    </div>
   
  </div>
</section>

    </>
  )
}

export default Steps
