export const getGif = async () =>{
    const url = `https://api.giphy.com/v1/gifs/random?api_key=cYUpwPgZWImJ3k6jBeKAz0Qk7qITpoxb`;
    
    const resp =  await fetch(url);
    const {data} = await resp.json();
    console.log(data);
    // const gifs = data.map(gif => {
    //     console.log(gif);
    //     return {
    //         id: gif.id,
    //         title: gif.title,
    //         url: gif.images?.fixed_height_small.url
    //     }
    // });
    // return gifs;
}