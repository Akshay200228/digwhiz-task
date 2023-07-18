import React, { useState } from 'react';
import { about, beach, building, home } from '../assets';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const imageData = {
    all: [
      { id: 1, image: beach },
      { id: 2, image: building },
      { id: 3, image: about },
      { id: 4, image: home },
      { id: 5, image: beach },
      { id: 7, image: building },
      { id: 8, image: building },
      { id: 9, image: building },
      { id: 10, image: building },
      { id: 11, image: building },
      { id: 12, image: building },
      { id: 13, image: building },
    ],
    finance: [
      { id: 1, image: building },
      { id: 2, image: home },
    ],
    healthcare: [
      { id: 3, image: about },
    ],
    interior: [
      { id: 5, image: home },
      { id: 6, image: building },
    ],
    office: [
      { id: 7, image: home },
    ]
  };

  const selectedImages = selectedCategory ? imageData[selectedCategory] : imageData.all;

  return (
    <section className="h-full mb-20">

      <div className="flex flex-wrap justify-center">
        <button
          className={`m-2 py-2 px-4 rounded transition-colors ${
            selectedCategory === 'all' ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
          } hover:bg-yellow-400 hover:text-white`}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        <button
          className={`m-2 py-2 px-4 rounded transition-colors ${
            selectedCategory === 'finance' ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
          } hover:bg-yellow-400 hover:text-white`}
          onClick={() => handleCategoryChange('finance')}
        >
          Buildings
        </button>
        <button
          className={`m-2 py-2 px-4 rounded transition-colors ${
            selectedCategory === 'healthcare' ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
          } hover:bg-yellow-400 hover:text-white`}
          onClick={() => handleCategoryChange('healthcare')}
        >
          Healthcare
        </button>
        <button
          className={`m-2 py-2 px-4 rounded transition-colors ${
            selectedCategory === 'interior' ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
          } hover:bg-yellow-400 hover:text-white`}
          onClick={() => handleCategoryChange('interior')}
        >
          Interior
        </button>
        <button
          className={`m-2 py-2 px-4 rounded transition-colors ${
            selectedCategory === 'office' ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
          } hover:bg-yellow-400 hover:text-white`}
          onClick={() => handleCategoryChange('office')}
        >
          Office
        </button>
      </div>
      <div className="flex flex-wrap">
        {selectedImages.map((image) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            key={image.id}
          >
            {isLoading && <div className="placeholder w-full h-64 bg-gray-200"></div>}
            <img
              src={image.image}
              alt={`Image ${image.id}`}
              className={`w-full transition-opacity ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
