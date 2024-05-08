import toast, { Toaster } from 'react-hot-toast';
import style from '../SearchBar/SearchBar.module.css';
import { FormEvent, forwardRef } from 'react';

interface Props {
  onSubmit: (param: string) => void;
}

const SearchBar = forwardRef<HTMLElement, Props>(({ onSubmit }, ref) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    const inputValue = input.value.trim();

    if (!inputValue) {
      toast.error('Search request cannot be empty');
      form.reset();
      return;
    }
    onSubmit(inputValue);
    form.reset();
  };

  return (
    <>
      <header ref={ref} className={style.searchHeader}>
        <form className={style.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={style.searchInput}
          />
          <button type="submit" className={style.searchButton}>
            Search
          </button>
        </form>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: { background: '#fff', color: '#1f1fc4' },
          }}
        />
      </header>
    </>
  );
});

export default SearchBar;
