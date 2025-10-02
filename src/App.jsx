import NoteForm from "./components/NoteForm";

const App = () => {
  return (
    <div className='max-w-2xl mx-auto mt-12 p-8 bg-[#252525] rounded-2xl shadow-2xl border border-gray-800'>
      <h2 className='text-3xl font-semibold mb-8 text-gray-100 tracking-tight'>
        📒 Notes App
      </h2>
      <NoteForm />
    </div>
  );
};

export default App;
