const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-300 mb-2'
      >
        {label}
      </label>
      <select
        name={name}
        className='w-full px-4 py-3 bg-[#2f2f2f] border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:border-transparent transition-all duration-100 cursor-pointer'
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
