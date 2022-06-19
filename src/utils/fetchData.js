
export const exerciseOptions = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed638bfdb1msh001a16efa8ba360p15e40ejsn050579761c1e',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

  
  export const youtubeOptions = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed638bfdb1msh001a16efa8ba360p15e40ejsn050579761c1e',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };