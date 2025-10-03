const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500 mt-10'>No Notes Yet</p>;
  }

  return (
    <div className='space-y-4'>
      {notes.map((note) => {
        return (
          <div
            key={note.id}
            className='p-4 bg-[#2f2f2f] rounded-lg shadow-md border-l-4 border-blue-500 mt-10 relative'
          >
            <div className='flex justify-between items-start'>
              <h3 className='text-lg font-bold text-gray-100 pr-4'>
                {note.title}
              </h3>
              <div className='flex gap-2 flex-shrink-0'>
                <span className='text-xs px-2 py-1 bg-[#3f3f3f] rounded-lg text-gray-300 border border-gray-600'>
                  {note.priority === "High"
                    ? "🔴"
                    : note.priority === "Medium"
                    ? "🟠"
                    : "🟢"}{" "}
                  {note.priority}
                </span>
                <span className='text-xs px-2 py-1 bg-[#3f3f3f] rounded-lg text-gray-300 border border-gray-600'>
                  {note.category === "Work"
                    ? "📁"
                    : note.category === "Personal"
                    ? "🏡"
                    : "💡"}{" "}
                  {note.category}
                </span>
              </div>
            </div>
            <p className='mt-3 text-gray-400'>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
