import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.scss'
import axios from 'axios'


const Coins = () => {
    const [coins, setCoins] = useState([])
    const [filter, setFilter] = useState([])
    const input = useRef('')

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en'

    useEffect(() => {
        axios.get(url).then(response => {
            setCoins(response.data)
            setFilter(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const handleSubmit = (e) => {
        let searchedCoins = []
        e.preventDefault()

        if (input.current.value == '') {
            setFilter(coins)
        } else {
            coins.forEach(coin => {
                if ((coin.name.toLowerCase()).includes(input.current.value.toLowerCase())) {
                    searchedCoins.push(coin)
                }
            })
            setFilter(searchedCoins)

        }
        input.current.value = ''
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
                {filter.map(coins => {
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
