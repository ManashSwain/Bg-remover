const Upload = () => {
  return (
   <>
   <section className="my-24">
   <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-600 ">Remove Image Background</h1>
   <div>
   <div className="flex justify-center p-5 my-8">
        <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            <input type="file" id="upload" className="hidden" />
            <label htmlFor="upload">
                <p>Upload your image</p>
            </label>
        </button>
        
      </div>
   </div>
   </section>
   </>
  )
}

export default Upload
