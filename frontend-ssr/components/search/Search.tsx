import React from 'react';
import debounce from 'lodash/debounce';

import styles from './Search.module.scss';

interface State {
  searchValue: string;
}
interface Props {
  query: string;
  onSearch: (query: string) => Promise<void>;
}

class Search extends React.Component<Props, State> {
  debouncedSearch: (query: string) => void;

  constructor(props) {
    super(props);

    this.state = {
      searchValue: props.query,
    };

    const { onSearch } = this.props;

    this.debouncedSearch = debounce(onSearch, 300);
  }

  onChange = (e) => {
    e.preventDefault();

    this.setState({ searchValue: e.target.value });

    this.debouncedSearch(e.target.value);
  };

  onSubmit = (e) => {
    const { onSearch } = this.props;

    e.preventDefault();

    onSearch(e.target.query.value);
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className={`${styles.form} d-flex align-items-center`}
        >
          <input
            type="text"
            name="query"
            placeholder="search"
            value={searchValue}
            onChange={this.onChange}
          />
          <button type="submit" className="btn btn--blue">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
