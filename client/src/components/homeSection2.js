import React, { useEffect, useState } from 'react'
import '../components/homeSection2.scss'
import axios from 'axios'
function HomeSection2() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(res => setDatas(res.data))
        console.log(datas);
    }, [])
    return (
        <div className='homeSection2'>
            <div className='heading2'>
                <h2>Practice Areas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='cards'>
                <div className='container'>

                <div className='card'>
                    <div>
                        {datas.map((elem) => (
                            <>
                                <img src={`${elem.imageUrl}`} />
                                <h3>{elem.name}</h3>
                                <p>{elem.surname}</p>
                            </>


                        ))}


                    </div>
                </div>

                </div>

            </div>
        </div>
    )
}

export default HomeSection2
