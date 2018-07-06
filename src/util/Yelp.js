const apiKey = 'B_bNM9s0Tghke5ka3novLQZ1AJAHbhKohUX2Mjh_mwUpjixE2C4j9IIrWdF2kB2-fXTIcT_Z6UQ3d86Q__4dKPQMHvutM9ciZPEn33jrl8pI2G_gddpbWJhG5cQ7W3Yx';

const Yelp = {   //object created 'Yelp', search method created;
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    headers{
      Authorization: `Bearer ${apiKey}`.then(
        response => {
          return response.json();
        }).then(
          jsonResponse {
            if (jsonResponse.business) {
              return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
              })
            }
          }
        )
    } )
  }
}

export default Yelp;
