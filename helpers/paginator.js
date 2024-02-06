const pagination = (data, limit, page) => {
  const pageInt = Number(page);
  const limitInt = Number(limit);

  const startIndex = (pageInt - 1) * limitInt;
  const endIndex = pageInt * limitInt;


  const results = {};

  if (1 === 1) { 
    results.next = {
      page: pageInt + 1,
      limit: limitInt,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: pageInt - 1,
      limit: limitInt,
    };
  }

  results.results = data; 

  console.log(results);

  return results;
};

export default pagination;