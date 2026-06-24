import React from 'react';

import SearchableSelect from './SearchableSelect';

export default {
  component: SearchableSelect,
  title: 'Components/SearchableSelect',
};

export const Default = args => <SearchableSelect {...args} />;

Default.args = {
  label: 'Country',
  id: 'country-select',
  onValueChange: () => null,
  placeholder: 'Select a country',
  searchPlaceholder: 'Search countries...',
  value: undefined,
  disabled: false,
  required: false,
  options: [
    { label: 'Afghanistan', value: 'AF' },
    { label: 'Albania', value: 'AL' },
    { label: 'Algeria', value: 'DZ' },
    { label: 'Argentina', value: 'AR' },
    { label: 'Australia', value: 'AU' },
    { label: 'Austria', value: 'AT' },
    { label: 'Belgium', value: 'BE' },
    { label: 'Bolivia', value: 'BO' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Bulgaria', value: 'BG' },
    { label: 'Canada', value: 'CA' },
    { label: 'Chile', value: 'CL' },
    { label: 'China', value: 'CN' },
    { label: 'Colombia', value: 'CO' },
    { label: 'Croatia', value: 'HR' },
    { label: 'Czech Republic', value: 'CZ' },
    { label: 'Denmark', value: 'DK' },
    { label: 'Ecuador', value: 'EC' },
    { label: 'Egypt', value: 'EG' },
    { label: 'Estonia', value: 'EE' },
    { label: 'Finland', value: 'FI' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
    { label: 'Greece', value: 'GR' },
    { label: 'Hungary', value: 'HU' },
    { label: 'India', value: 'IN' },
    { label: 'Indonesia', value: 'ID' },
    { label: 'Iran', value: 'IR' },
    { label: 'Ireland', value: 'IE' },
    { label: 'Israel', value: 'IL' },
    { label: 'Italy', value: 'IT' },
    { label: 'Japan', value: 'JP' },
    { label: 'Jordan', value: 'JO' },
    { label: 'Kenya', value: 'KE' },
    { label: 'South Korea', value: 'KR' },
    { label: 'Latvia', value: 'LV' },
    { label: 'Lithuania', value: 'LT' },
    { label: 'Malaysia', value: 'MY' },
    { label: 'Mexico', value: 'MX' },
    { label: 'Morocco', value: 'MA' },
    { label: 'Netherlands', value: 'NL' },
    { label: 'New Zealand', value: 'NZ' },
    { label: 'Nigeria', value: 'NG' },
    { label: 'Norway', value: 'NO' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Peru', value: 'PE' },
    { label: 'Philippines', value: 'PH' },
    { label: 'Poland', value: 'PL' },
    { label: 'Portugal', value: 'PT' },
    { label: 'Romania', value: 'RO' },
    { label: 'Russia', value: 'RU' },
    { label: 'Saudi Arabia', value: 'SA' },
    { label: 'Serbia', value: 'RS' },
    { label: 'Singapore', value: 'SG' },
    { label: 'Slovakia', value: 'SK' },
    { label: 'Slovenia', value: 'SI' },
    { label: 'South Africa', value: 'ZA' },
    { label: 'Spain', value: 'ES' },
    { label: 'Sweden', value: 'SE' },
    { label: 'Switzerland', value: 'CH' },
    { label: 'Taiwan', value: 'TW' },
    { label: 'Thailand', value: 'TH' },
    { label: 'Turkey', value: 'TR' },
    { label: 'Ukraine', value: 'UA' },
    { label: 'United Arab Emirates', value: 'AE' },
    { label: 'United Kingdom', value: 'GB' },
    { label: 'United States', value: 'US' },
    { label: 'Uruguay', value: 'UY' },
    { label: 'Venezuela', value: 'VE' },
    { label: 'Vietnam', value: 'VN' },
  ],
};

export const WithError = args => <SearchableSelect {...args} />;

WithError.args = {
  ...Default.args,
  label: 'Country',
  id: 'country-select-error',
  error: 'Please select a country',
  value: undefined,
};

export const Disabled = args => <SearchableSelect {...args} />;

Disabled.args = {
  ...Default.args,
  label: 'Country',
  id: 'country-select-disabled',
  disabled: true,
  value: 'GB',
};

export const Locked = args => <SearchableSelect {...args} />;

Locked.args = {
  ...Default.args,
  label: 'Country',
  id: 'country-select-locked',
  lockedValue: 'US',
};

export const NoLabel = args => <SearchableSelect {...args} />;

NoLabel.args = {
  ...Default.args,
  label: undefined,
  id: undefined,
  ariaLabel: 'Select a country',
};
