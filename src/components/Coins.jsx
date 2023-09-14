import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.scss'


const Coins = (props) => {
    const input = useRef('')

    let [crypto, setCrypto] = useState([])

    useEffect(() => {
        setCrypto(props.coins)
    }, [])

    const handleSubmit = (e) => {
        let searchedCoins = []
        e.preventDefault()
        props.coins.forEach(coin => {
            if ((coin.name.toLowerCase()).includes(input.current.value.toLowerCase())) {
                searchedCoins.push(coin)
            }
        });
        setCrypto(searchedCoins)
    }

    return (
        <div className='container'>
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input className='input' type="text" placeholder='Coin name...' ref={input} />
                </form>
                <div className="heading">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>
                {crypto.map(coins => {
                    return (
                        <Link to={`coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Coins
