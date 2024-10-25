const Select = () => {
  const options = [
    { key: "name", label: "name", value: "name" },
    { key: "name2", label: "name2", value: "name2" },
  ];

  return (
    <div>
      <select className="border border-black w-[30rem] h-10 focus:outline-none focus:border-gray-400 p-2 rounded-md focus:bg-gray-200 text-red-500">
        <option value="" disabled hidden selected>
          Select your topic
        </option>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
