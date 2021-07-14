export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=cYUpwPgZWImJ3k6jBeKAz0Qk7qITpoxb`;
    const resp =  await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });
    return gifs;
}