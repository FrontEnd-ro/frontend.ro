import React from 'react';
import debounce from 'lodash/debounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

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
          className={`${styles.search} d-flex align-items-center`}
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            value={searchValue}
            className="w-100"
            onChange={this.onChange}
          />
          <Button type="submit" variant="blue" title="Search">
            <FontAwesomeIcon width="24" icon={faSearch} />
            <span>Search </span>
          </Button>
        </form>
      </div>
    );
  }
}

export default Search;
