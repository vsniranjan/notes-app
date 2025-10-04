import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";

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
        {isFormVisible ? "Hide Form" : "Add Note"}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isFormVisible ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={handleSubmit} className='space-y-5'>
          <TextInput
            name={"title"}
            label={"Title"}
            value={formData.title}
            onChange={handleChange}
            placeholder={"Enter note title..."}
          />

          <div className='grid grid-cols-2 gap-4'>
            <SelectInput
              name={"priority"}
              label={"Priority"}
              value={formData.priority}
              onChange={handleChange}
              options={[
                { value: "High", label: "🔴 High" },
                { value: "Medium", label: "🟠 Medium" },
                { value: "Low", label: "🟢 Low" },
              ]}
            />
            <SelectInput
              name={"category"}
              label={"Category"}
              value={formData.category}
              onChange={handleChange}
              options={[
                { value: "Work", label: "📁 Work" },
                { value: "Personal", label: "🏡 Personal" },
                { value: "Ideas", label: "💡 Ideas" },
              ]}
            />
          </div>

          <div>
            <TextInput
              name={"description"}
              label={"Description"}
              value={formData.description}
              onChange={handleChange}
              placeholder={"Add your notes here..."}
            />
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
