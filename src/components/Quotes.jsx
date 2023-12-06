import {useState, useEffect} from 'react';

const Quotes = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [quotes, setQuotes] = useState([])
    const url = "https://api.quotable.io/random";
 
    useEffect(() =>{
        fetch(url).then((response) => {
            if(response.status >= 200 && response.status <= 300) {
                return response.json()
            }else{
                setIsLoading(false)
                setIsError(true)
                throw new Error(response.statusText)
            }
        }).then((data)=>{
            setQuotes(data)
            setIsLoading(false)
        }).catch((error)=>{console.log(error)})
    },[])

    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if(isError){
        return(
            <div>
                <h1>Error...</h1>
            </div>
        )
    }

  return (
    <>
    <div>
        <p>"{quotes.content}" -{quotes.author}</p>
        <button style={{margin: "10rem", height: '50px', width:'80px', textAlign: 'center'}} className='btn' onClick={()=>{window.location.reload()}}>Reload Quotes</button>
    </div>
    </>
  )
}

export default Quotes