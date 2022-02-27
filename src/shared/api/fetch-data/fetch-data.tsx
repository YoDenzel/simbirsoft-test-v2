export const fetchData = async (url: string) => {
  const response = await fetch(`http://api.football-data.org/v2/${url}`, {
    method: 'GET',
    headers: {
      'X-auth-token': `${process.env.REACT_APP_API_KEY}`,
    },
  });
  if (!response.ok) throw new Error(response.statusText);
  const data = response.json();
  return data;
};
