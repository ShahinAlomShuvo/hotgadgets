const SearchInput = () => {
  return (
    <>
      <form>
        <input
          type='text'
          placeholder='Type here'
          className='  w-96 py-3 px-4 rounded-l'
        />
        <button className='bg-red-500 px-4 py-3 rounded-r'>Search</button>
      </form>
    </>
  );
};

export default SearchInput;
