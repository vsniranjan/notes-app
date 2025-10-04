const TextInput = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-300 mb-2'
      >
        {label}
      </label>
      <input
        name={name}
        type='text'
        className='w-full px-4 py-3 bg-[#2f2f2f] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:border-transparent transition-all duration-100'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
