import { useEffect, useState } from 'react'

const useFetch = (url) => {


    if (!url) {
        throw new Error('Se necesita una dirección')
    }

    const [state, setState] = useState({ data: null, loading: true, error: null })




    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {


                    setState({
                        loading: false,
                        error: null,
                        data
                    })


                }, 0)



            })


    }, [url])



    return state;

}

export default useFetch