import { useState, useEffect } from "react"

export default function Meme(){
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:""
    })

    console.log(typeof meme.randomImage)


    const [allMeme, setAllMeme] = useState([])

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    },[])

    function getRandomImage(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => (({
            ...prevMeme,
            randomImage: url
        })))
    }
    

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => (({
            ...prevMeme,
            [name]: value
        })))
    }


    return (
        <div>
            <div className="inputs">
                <input 
                type="text"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button
                onClick={getRandomImage}
                >
                    {
                        meme.randomImage === "" ?
                        "Get meme image" : "Get new meme image"
                    }
                </button>
            </div>
            <div className="meme-image">
                <img src={meme.randomImage} alt="" />
                
                <h1 className="meme-text top">
                {meme.randomImage === "" ? "" : meme.topText}
                </h1>
                <h1 className="meme-text bottom">
                {meme.randomImage === "" ? "" : meme.bottomText}
                </h1>
            </div>
            
        </div>
    )
}