const Header = () => {
  return (
    <>

<section className="text-gray-600 body-font sm:px-12 md:px-28">
  <div className=" container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-yellow-500 font-bold sm:text-4xl text-3xl mb-4 ">Remove the background with high quality and accuracy
      </h1>
      <h1 className="title-font text-gray-600 font-bold sm:text-4xl text-3xl mb-4 ">from images for free</h1>
      <p className="mb-8 leading-relaxed font-semibold">Say goodbye to manual editing! Our AI-powered background remover makes it effortless to extract subjects from any image with high precision and speed. Simply upload your image, and our advanced algorithm will remove the background in seconds—no technical skills required.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            <input type="file" id="upload" className="hidden" />
            <label htmlFor="upload">
                <p>Upload your image</p>
            </label>
        </button>
        
      </div>
    </div>
    <div className="sm:hidden lg:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>

    </>
  )
}

export default Header
