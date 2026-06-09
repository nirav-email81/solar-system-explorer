import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { solarSystemData } from '../data/solarSystemData';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof solarSystemData>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length > 0) {
      const filtered = solarSystemData.filter(body =>
        body.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (id: string) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/body/${id}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search planets, moons, dwarf planets..."
        value={query}
        onChange={e => handleSearch(e.target.value)}
        onFocus={() => results.length > 0 && setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map(body => (
            <button
              key={body.id}
              className="search-result-item"
              onMouseDown={() => handleSelect(body.id)}
            >
              <span
                className="search-result-color"
                style={{ background: body.color }}
              />
              <div>
                <div className="search-result-name">{body.name}</div>
                <div className="search-result-type">{body.type.replace('-', ' ')}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
