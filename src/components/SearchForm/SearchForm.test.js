import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

it('should render SearchForm component shallowly', () => {
  shallow(<SearchForm />);
});

describe('SearchForm props', () => {
  const props = {
    searchTerm: 'moon',
    startingYear: '5333',
    endingYear: '5555',
    searchForData: jest.fn(),
  };
  const wrapper = shallow(<SearchForm {...props} />);

  it('should have searchTerm prop as value', () => {
    const searchTermInput = wrapper.find('.searchTermInput');
    expect(searchTermInput.props().value).toBe(props.searchTerm);
  });

  it('should have startingYear prop as value', () => {
    const startingYearInput = wrapper.find('.startingYearInput');
    expect(startingYearInput.props().value).toBe(props.startingYear);
  });

  it('should have endingYear prop as value', () => {
    const endingYearInput = wrapper.find('.endingYearInput');
    expect(endingYearInput.props().value).toBe(props.endingYear);
  });

  it('should call searchForData prop function when search button is clicked', () => {
    const searchBtn = wrapper.find('.searchBtn');
    searchBtn.simulate('click', {
      preventDefault: () => {
        props.searchForData(props.text);
      },
    });
    expect(props.searchForData).toBeCalledTimes(1);
  });
});
