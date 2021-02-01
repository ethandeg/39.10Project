import React, {useState} from "react"
import axios from "axios"
const useFlip = (initialState=true) => {
    // function PlayingCard({ front, back = backOfCard }) {
    //     const [isFacingUp, setIsFacingUp] = useState(true);
    //     const flipCard = () => {
    //       setIsFacingUp(isUp => !isUp);
    //     };

    const [state, setState] = useState(initialState)
    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard]
}



// In the PlayingCardList component, we initialize an empty array in state, and add to it via an AJAX request we make with axios. Since we use axios in a few components, let’s move this logic into a function called useAxios.

// useAxios should take in a URL, and similar to useState, it should return an array with two elements. The first element is an array of data obtained 
// from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.

// Once you’ve written this hook, refactor PlayingCardList to use this custom hook. (Don’t worry about PokeDex for now - that’s coming in the next part!

// Step Four: useAxios in PokeDex
const useAxios = async (url) => {
    const [data, setData] = useState([])
    const addResponseData = async () => {
        const res = await axios.get(url)
        setData(data => [...data, res.data])
    }


    return [data, addResponseData]
}

export {useFlip, useAxios}