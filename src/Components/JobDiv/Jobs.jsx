import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import logol from '../../Assets/logo (1).png';

const Data = [ // Data is an array
  {
    id: 1,
    image: logol,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Novac Linus Co.',
  },
    {
    id: 2,
    image: logol,
    title: 'Software Engineer',
    time: '2 days ago',
    location: 'USA',
    desc: 'Another job description...',
    company: 'Google',
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map((job) => (
          <div
            key={job.id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {job.title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {job.time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{job.location}</h6>
            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {job.desc}
            </p>
              <h6 className="text-[#ccc]">{job.company}</h6> {/* Added company display */}
            <img src={job.image} alt="Job Logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;