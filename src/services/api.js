export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const regions = await response.json();

  return regions;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const categories = await response.json();

  return categories;
}

export async function fetchRestaurants({ selectedRegion, selectedCategory }) {
  const url = ` https://eatgo-customer-api.ahastudio.com/restaurants?region=${selectedRegion}&category=${selectedCategory}`;
  const response = await fetch(url);
  const restaurants = response.json();

  return restaurants;
}