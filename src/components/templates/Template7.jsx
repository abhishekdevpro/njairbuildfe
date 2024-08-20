import React from "react";
const Template7 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  predefinedText
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
  };

  // Check if all details are filled
  const allDetailsFilled = details.every(detail =>
    areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
  );

  const allDetailsFilled2 = experiences.every(experience =>
    areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
  );

  const allDetailsFilled3 = educations.every(education =>
    areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
  );

  const allDetailsFilled4 = skills.every(skill =>
    areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
  );

  const allDetailsFilled5 = sectionadd.every(section =>
    areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
  );

  const allDetailsFilled6 = summary.every(summar =>
    areAllFieldsFilled(summar, ['summarydescription'])
  );

  return (
    <div
      className={`border-2 border-gray-300 px-5 break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font }}
    >
      {/* Red circle indicating all fields are filled */}
      {!isPreviewScreen && (
        <div className="">
         {allDetailsFilled && (
            <div className="w-7 h-7 ps-2.5 mt-11 bg-white rounded-2xl absolute top-48 left-10 font-bold">1</div>
          )}
          {allDetailsFilled2 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-10 bg-white rounded-2xl absolute top-60 left-10 font-bold">2</div>
          )}
          {allDetailsFilled3 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-10 bg-white rounded-2xl absolute top-72 left-10 font-bold">3</div>
          )}
          {allDetailsFilled4 && (
            <div className="w-7 h-8 ps-2.5 mt-14 bg-white rounded-2xl absolute top-80 left-10 font-bold">4</div>
          )}
          
          {allDetailsFilled6 && (
            <div className="w-7 h-7 ps-2.5 mt-10 bg-white rounded-2xl absolute top-96 left-10 font-bold">5</div>
          )}
        </div>
      )}

      <div className='flex'>
        <div className='w-2/3 px-10 '>
          {details.map((del, index) => (
            <div key={index}>
              <h3 className="text-lg md:text-xl lg:text-3xl text-orange-800 font-bold">{del.name || predefinedText.details.name}</h3>
              <p className='font-medium'>{del.Profession || predefinedText.details.profession}</p> <br />
            </div>
          ))}

         

          {experiences.length > 0 && (
            <div>
              <h5 className='text-orange-700 font-bold'>WORK EXPERIENCE</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
              {experiences.map((exp, index) => (
    <div key={index}>
      <div className="flex justify-between">
        <h6 className="font-bold break-all">{exp.Company || predefinedText.experiences.company}</h6>
        <p className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.month1} - {exp.month2}</p>
      </div>
      <div className="flex justify-between">
        <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.role ||  predefinedText.experiences.role }</h6>
        <p className="text-xs sm:text-xs md:text-xs lg:text-xs">{exp.companyplace ||  predefinedText.experiences.companyplace}</p>
      </div>
      <ul className={`${exp.companydescription ? 'text-xs sm:text-xs md:text-xs lg:text-xs' : ''} w-full break-all`}>
  {exp.companydescription ? (
    // If company description is provided, split by new lines and render each line as a list item
    exp.companydescription.split(/\r?\n/).map((line, i) => (
      <li
        key={i}
        className={`${line.trim() ? 'before:content-[""] before:mr-1' : ''} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-full break-all`}
        style={{ marginBottom: '4px' }} // Adjust margin bottom as needed
        dangerouslySetInnerHTML={{ __html: line ? `${line}` : '' }}
      />
    ))
  ) : (
    // Render a placeholder or message if company description is not provided
    <li className="text-gray-400 italic">No description provided</li>
  )}
</ul>

      <br />
    </div>
  ))}
            </div>
          )}

          {/* Add other sections here */}

        </div>

        <div className="w-1/3 p-4 bg-orange-100" style={{ backgroundColor: boxBgColor }}>
          <div>
            <h5 className='text-orange-700 font-bold'>CONTACT</h5>
            <div className="flex-grow border-t border-gray-300 align-super"></div>
            <ul className="text-xs md:text-xs lg:text-xs mt-2">
              {details.map((del, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    {del.address || predefinedText.details.address}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs flex items-center'>
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    {del.phoneNumber || predefinedText.details.phoneNumber}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all flex items-center'>
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    {del.email || predefinedText.details.email}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs flex items-center'>
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    <a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          {skills.length > 0 && (
            <div>
              <h5 className='text-orange-700 font-bold'>SKILLS</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
              <ul className="mt-2">
                {skills.map((skill, index) => (
                <div>
                   <li key={index}>
                    <span className="font-bold">{skill.skillname || predefinedText.skills.skillname}</span>
                    
                  </li>
                  <li>
                    {skill.skilldetails || predefinedText.skills.skilldetails}
                  </li>
                </div>
                ))}
              </ul>
            </div>
          )}

          {educations.length > 0 && (
            <div>
              <h5 className='text-orange-700 font-bold'>EDUCATION</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
              <ul className="mt-2">
                {educations.map((edu, index) => (
                  <li key={index}>
                    {edu.coursename || predefinedText.educations.coursename} at
                     {edu.schoolname || predefinedText.educations.schoolname}, 
                     {edu.schoolplace || predefinedText.educations.schoolplace}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template7;
