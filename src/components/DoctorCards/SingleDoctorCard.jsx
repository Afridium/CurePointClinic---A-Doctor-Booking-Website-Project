import React from 'react';

const SingleDoctorCard = ({ doc}) => {
    
    
    
    const { name, education, registration_number, experience } = doc;
    return (
        <div className='flex justify-center mx-auto mb-5 lg:w-80 md:w-80'>
            <div className="card bg-base-100 md:w-full w-[98%] shadow-sm  rounded-4xl">
                <figure className='w-full md:h-65 h-78 mx-auto p-5 rounded-3xl'>
                    <img
                        className='w-full h-full rounded-4xl object-top object-cover'
                        src={doc.image}
                        alt="Doctor" />
                </figure>
                <div className="card-body flex-1">
                    <div className='flex gap-1.5 items-center'>
                        <div className="badge badge-secondary rounded-3xl text-xs border-[#09982f33] bg-[#09982f1a] text-[#09982f]">Available</div>
                        <div className="badge badge-secondary rounded-3xl text-xs bg-[#176ae51a] text-[#176ae5] border-[#176ae533]">{experience}+ of experience</div>
                    </div>

                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <div>
                        <p className='text-[#0f0f0f99] text-lg font-bold wrap-break-word'>{education}</p>
                    </div>

                    <hr className='border-dotted border-[#0f0f0f33]' />
                    <p className='flex items-center'>Reg No:
                        <span className='text-3xl text-[#0f0f0f99]'>®</span>
                        {registration_number}</p>
                    <button className='btn text-[#176ae5] border-[#176ae5] rounded-4xl font-bold'>View Details</button>
                </div>
            </div>
            
        </div>
    );
};

export default SingleDoctorCard;