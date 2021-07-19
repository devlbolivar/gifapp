export const getGif = async () => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=cYUpwPgZWImJ3k6jBeKAz0Qk7qITpoxb`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  return {
    id: data.id,
    title: data.title,
    url: data.images?.fixed_height_small.url,
  };
};
