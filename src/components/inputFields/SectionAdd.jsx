import React, { useEffect } from 'react';
import Language from './Language';

const SectionAdd = ({ sectionadd = [], handleInputChange, addSectionAdd, addSectionAdd2, deleteSectionAdd, selectedTemplate }) => {

  // Ensure there is always one section to display
  useEffect(() => {
    if (sectionadd.length === 0) {
      addSectionAdd();
    }
  }, [sectionadd, addSectionAdd]);

  return (
    <div className="mt-10 px-20 text-xs sm:text-xs md:text-xs lg:text-xs">
      <div>
        <h1 className='text-4xl font-semibold mb-3'>Do you have anything else to add?</h1>
        
      </div>
      {(selectedTemplate === "Template1" || selectedTemplate === "Template2" || selectedTemplate === "Template4" || 
      selectedTemplate === "Template5" || selectedTemplate === "Template3" || selectedTemplate === "Template7" || selectedTemplate === "Template8"
      || selectedTemplate === "Template9" )&&(
        <div><h1 className='text-lg'>These sections are optional.</h1>
          {sectionadd.map((section, index) => (
        <div key={index} className="relative mt-4 px-100">
          <div className="flex gap-6">
            <div className="w-3/4">
              <label htmlFor="sectiontitle" className="block text-sm font-medium text-gray-700 mb-2">
                Title 
              </label>
              <input
                type="text"
                name="sectiontitle"
                value={section.sectiontitle}
                onChange={(e) => handleInputChange(e, index, 'sectionadd')}
                placeholder="Section title"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
            <div className="w-3/4">
              <label htmlFor="sectionname" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="sectionname"
                value={section.sectionname}
                onChange={(e) => handleInputChange(e, index, 'sectionadd')}
                placeholder="Section Name"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
          </div>
          <div className="w-3/4">
            <label htmlFor="sectiondescription" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              name="sectiondescription"
              value={section.sectiondescription}
              onChange={(e) => handleInputChange(e, index, 'sectionadd')}
              placeholder="Section description"
              className="w-full p-3 mb-4 border border-black rounded-lg"
            />
          </div>
          {sectionadd.length > 1 && (
            <button type="button" onClick={() => deleteSectionAdd(index)} className="mt-2 text-red-500">
              Delete Section
            </button>
          )}
        </div>
      ))}
      <button className="font-bold text-lg flex items-center p-2 px-10 mt-10 border-2 border-black rounded-full" onClick={addSectionAdd}>
        <h3>Add Section</h3>
        <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
          <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
        </svg>
      </button>
        </div>
      )}


{selectedTemplate === "Template6" && (
        <div>
         {sectionadd.map((section2, index) => (
        <div key={index} className="relative mt-4 px-100">
          <div className="flex gap-6">
            <div className="w-3/4">
              <label htmlFor="addlanguage1" className="block text-sm font-medium text-gray-700 mb-2">
                Add Language 1 
              </label>
              <input
                type="text"
                name="addlanguage1"
                value={section2.addlanguage1}
                onChange={(e) => handleInputChange(e, index, 'addSectionAdd2')}
                placeholder="Add Language"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
            <div className="w-3/4">
              <label htmlFor="addlanguage2" className="block text-sm font-medium text-gray-700 mb-2">
                Add Language 2
              </label>
              <input
                type="text"
                name="addlanguage2"
                value={section2.addlanguage2}
                onChange={(e) => handleInputChange(e, index, 'addSectionAdd2')}
                placeholder="Section Name"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
          </div>
          
         
        </div>
      ))}
      {sectionadd.map((section3, index) => (
        <div key={index} className="relative mt-4 px-100">
          <div className="flex gap-6">
            <div className="w-3/4">
              <label htmlFor="addaward1" className="block text-sm font-medium text-gray-700 mb-2">
              Add award
              </label>
              <input
                type="text"
                name="addaward1"
                value={section3.addaward1}
                onChange={(e) => handleInputChange(e, index, 'addSectionAdd3')}
                placeholder="Add Language"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
            <div className="w-3/4">
              <label htmlFor="addaward2" className="block text-sm font-medium text-gray-700 mb-2">
              Add award
              </label>
              <input
                type="text"
                name="addaward2"
                value={section3.addaward2}
                onChange={(e) => handleInputChange(e, index, 'addSectionAdd3')}
                placeholder="Section Name"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
          </div>
          
         
        </div>
      ))}
      {sectionadd.map((section4, index) => (
        <div key={index} className="relative mt-4 px-100">
          <div className="flex gap-6">
            <div className="w-3/4">
              <label htmlFor="addrefernces1" className="block text-sm font-medium text-gray-700 mb-2">
              Add refernces
              </label>
              <input
                type="text"
                name="addrefernces1"
                value={section4.addrefernces1}
                onChange={(e) => handleInputChange(e, index, 'addSectionAdd2')}
                placeholder=" Add Refernces"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
            <div className="w-3/4">
              <label htmlFor="addrefernces2" className="block text-sm font-medium text-gray-700 mb-2">
              Add refernces
              </label>
              <input
                type="text"
                name="addrefernces2"
                value={section4.addrefernces2}
                onChange={(e) => handleInputChange(e, index, 'addSectionAdd2')}
                placeholder="Add refernces"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
            <div className="w-3/4">
              <label htmlFor="addrefernces3" className="block text-sm font-medium text-gray-700 mb-2">
              Add refernces
              </label>
              <input
                type="text"
                name="addrefernces3"
                value={section4.addrefernces3}
                onChange={(e) => handleInputChange(e, index, 'addSectionAdd2')}
                placeholder="Add refernces"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
          </div>
          
         
        </div>
      ))}
        </div>
      )}
    </div>
    
    
  );
};

export default SectionAdd;
