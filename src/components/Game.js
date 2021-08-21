import React, { useState, useEffect } from 'react';
import uniqid from "uniqid";

function Game({ increment, decrement, medal }) {


    const initialState = [];
    for (let i = 0; i < 100; i++) {
        const value = Math.floor(Math.random() * 10);
        if (initialState.includes(value)) {
            continue;

        }

         if (initialState.length <= 9){
            initialState.push(value)
         }

    }

    

    const [state, setstate] = useState(initialState);
    const [url, setUrl] = useState('');
    const [linkArr, setArr] = useState([]);
    const [selectedImg, setImg] = useState([]);
    const [selectedGif, setGif] = useState([]);


    
    

    
    
    useEffect(() => {
        const fetchData = async () => {
            const apiData = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=e5zaQR8aSiKeUbQ07wbaLq0PiiATCmyS', {mode: 'cors'});
            const response = await apiData.json();
            // console.log(response.data[0].images.original.url);
            const urlBox = [];
            response.data.map(item => urlBox.push(item.images.original.url))
            // console.log(urlBox);
            setArr(urlBox);
            // console.log(linkArr);
            setUrl(response.data[0].images.original.url);
            // setImg()
            // getRandomImages();
            // console.log(url)
            
        } 
        fetchData(); 
    }, []);




    // const number = state.map( (item) => {
    //     return(
    //         <div key={uniqid()}>
    //             <button value={item} onClick={getValue} >{item}</button>
    //             {/* <img src={url} alt='pic'/> */}
    //         </div>
    //     )
    // });

    
    const getRandomNum = () => {
        return Math.floor(Math.random() *50);
    }

    const getRandomImages = () => {
        let imagesArr = [];

        for (let i = 0; i <= 20; i++) {
           
            const randomImgNUm = getRandomNum();
            if ( imagesArr.includes(linkArr[randomImgNUm])) {
                continue;
            }
            if (imagesArr.length >= 15) {
                break;
            }
            imagesArr.push(linkArr[randomImgNUm])
        }

        // console.log(imagesArr)
        setImg(imagesArr);
        return imagesArr
    }

    useEffect( () => {
       
        getRandomImages()
    
    },[linkArr])

   
    

    const gameOver = () => {
        decrement();
        setGif(null);
        console.log(selectedGif);

    }
    
    const clickHandler = (e) => {
        medal();
        const id = e.target.id;
        const counter = selectedGif.includes(e.target.id) ? gameOver() : increment();
        medal();
        setGif([...selectedGif, id]);


        let shuffleImageArr = []
        let beforeShuffleImg = getRandomImages();
        
        for (let i = 0; i <= 15; i++) {
            const randomSecNum = Math.floor(Math.random() * 15);
            if ( shuffleImageArr.includes(beforeShuffleImg[randomSecNum])) {
                continue;
            }
            if (shuffleImageArr.length >= 15) {
                break;
            }
            shuffleImageArr.push(beforeShuffleImg[randomSecNum])
        }

        return shuffleImageArr;
    }

    const card = selectedImg.map((item) => {
        const id = uniqid();
        return(
            <div onClick={clickHandler} className='img-div' value={item} id={id} key={id}>
                <img   id={item} src={item} alt='pic' />
            </div>
        )
    })
    

    return (
        
        <div className='game-div'>
            {card}
            
           {/* {
            selectedImg.map((item) => {
                const id = uniqid();
                return(
                    <div onClick={clickHandler} className='img-div' value={item} id={id} key={id}>
                        <img   id={item} src={item} alt='pic' />
                    </div>
                )
            })
           } */}
          

        </div>
    )
}

export default Game
