// import { useParams } from 'react-router-dom';
import { MdPeopleAlt } from 'react-icons/md';
import { crewData } from '../constants/Crews_constants';
import StarRating from '../components/StarRating';
import { useState } from 'react';

const Crews = () => {
  const [filterCrew, setFilteredCrew] = useState(crewData);
  const [isActive, setIsActive] = useState(false);

  const applyFilter = (category) => {
    setFilteredCrew(crewData.filter((crew) => crew.cat === category));
    setIsActive(category);
  };

  return (
    <div className='flex flex-col gap-20'>
      <div className='bg-blue flex flex-col justify-center items-center py-[50px] w-full rounded-lg hover:bg-pink transition-all duration-300'>
        <MdPeopleAlt
          className='text-light text-5xl hover:scale-105 transition-all duration-300 cursor-pointer'
          onClick={() => setFilteredCrew(crewData)}
        />
        <h1 className='text-light text-4xl font-bold'>Our Crew</h1>
        <p className='text-light text-lg'>
          Browse through the doctors specialist.
        </p>
      </div>
      <div className='flex flex-row gap-20'>
        <div>
          <p
            onClick={() => applyFilter('Photographer')}
            className={`cursor-pointer text-lg ${
              isActive === 'Photographer' ? 'text-blue' : 'text-light'
            }`}
          >
            Photographers
          </p>
          <p
            onClick={() => applyFilter('Videographer')}
            className={`cursor-pointer text-lg ${
              isActive === 'Videographer' ? 'text-blue' : 'text-light'
            }`}
          >
            Videographers
          </p>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 md:gap-y-6 max-w-4xl justify-center items-center cursor-pointer w-full'>
          {filterCrew.map((crew) => (
            <div
              onClick={() => navigate(`/booking/${crew.id}`)}
              key={crew.image}
              className='flex flex-col justify-center items-center hover:-translate-y-5 transition-all duration-300'
            >
              <img
                src={crew.image}
                alt={crew.name}
                className='w-40 rounded-full relative'
              />
              <h3 className='text-light mt-4'>{crew.name.toUpperCase()}</h3>
              <p className='text-slate-400 text-sm'>{crew.cat}</p>
              <StarRating rating={crew.stars} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crews;
