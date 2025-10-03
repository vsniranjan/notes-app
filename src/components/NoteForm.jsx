import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Personal",
    priority: "Medium",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleChange(event) {
    // console.log(event.target.name, event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validation
    if (!formData.title || !formData.description) return;

    // Create note object
    const newNote = { id: Date.now(), ...formData };

    // Add notes to state
    setNotes([newNote, ...notes]);

    // Reset form data
    setFormData({
      title: "",
      category: "Personal",
      priority: "Medium",
      description: "",
    });

    // Close the form after successful submission
    setIsFormVisible(false);
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-[#2f2f2f] border border-gray-700 text-gray-100 py-3 rounded-lg cursor-pointer hover:bg-[#3a3a3a] hover:border-gray-600 transition-all duration-200 font-medium mb-4 shadow-md'
      >
        {isFormVisible ? "Hide Form ▲" : "Add Note ➕"}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease ${
          isFormVisible ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label
              htmlFor='title'
              className='block text-sm font-medium text-gray-300 mb-2'
            >
              Title
            </label>
            <input
              name='title'
              type='text'
              className='w-full px-4 py-3 bg-[#2f2f2f] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-100'
              placeholder='Enter note title...'
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='priority'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Priority
              </label>
              <select
                name='priority'
                type='text'
                className='w-full px-4 py-3 bg-[#2f2f2f] border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-100 cursor-pointer'
                value={formData.priority}
                onChange={handleChange}
              >
                <option value='High'>🔴 High</option>
                <option value='Medium'>🟠 Medium</option>
                <option value='Low'>🟢 Low</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='category'
                className='block text-sm font-medium text-gray-300 mb-2'
              >
                Category
              </label>
              <select
                name='category'
                type='text'
                className='w-full px-4 py-3 bg-[#2f2f2f] border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-100 cursor-pointer'
                value={formData.category}
                onChange={handleChange}
              >
                <option value='Work'>📁 Work</option>
                <option value='Personal'>🏡 Personal</option>
                <option value='Ideas'>💡 Ideas</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-300 mb-2'
            >
              Description
            </label>
            <textarea
              name='description'
              type='text'
              rows='4'
              className='w-full px-4 py-3 bg-[#2f2f2f] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-100 resize-none'
              placeholder='Add your notes here...'
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-lg transition-colors duration-100 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 cursor-pointer'
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default NoteForm;
