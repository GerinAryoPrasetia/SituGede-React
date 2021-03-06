import React from 'react'
import Clock from '../components/Clock'
import Details from '../components/Details'
import Indicator from '../components/Indicator'
import Location from '../components/Location'
import styles from '../css/Home.module.css'

const Home = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <Clock />
                <Location />
            </div>
            <Indicator />
            <p className={styles.description}>Cenderung Pasang</p>
            <button className={styles.btnDetail}>Lihat Detail</button>
            <hr style={{ width: '60%', margin: 'auto' }} />
            <div className={styles.detailWrapper}>
                <Details />
            </div>
        </div>
    )
}

export default Home
