import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import countriesJSON from '../countries.json';
import alpha3Code from '../countries.json';
const CountriesList = () => {
  const [countries, setCountries] = useState(countriesJSON);
  {
  }
  return (
    <div>
      {countries.map((theCountry) => {
        return (
          <Link to={'/' + theCountry.alpha3Code}>
            {' '}
            <img
              src={
                'https://flagpedia.net/data/flags/icon/64x48/${elem.alpha2Code.toLowerCase()}.png'
              }
            />
            {theCountry.name.common}
          </Link>
        );
      })}
    </div>
  );
};
export default CountriesList;
