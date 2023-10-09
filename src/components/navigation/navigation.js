'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getMenuData } from '@/services/data.service';

const Navigation = ({logo}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState([]);


    useEffect(() => {

        const getData = async () => {

            const data = await getMenuData();
            setMenuData(data);

        }

        getData();



    }, []);


    return <div className={styles.navigation}>
    
            <div className={styles.bar}>
                <div className={styles.logo}>
             
                    <Link href="/"><Image src={`/${logo}`}
                        alt={'SmukNu'}
                        width={4989}
                        height={1349}
                        className={styles.image}></Image></Link>

                </div>
                <div className={styles.actions}>
            
                    <div onClick={() => setIsOpen(!isOpen)}>

                        <FaBars className={`${styles.bars}`}></FaBars>
                     
                    </div>   

                </div>
            </div>


            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)}>
                

                {menuData.map( (menuItem) => {

                    return <Link key={menuItem.title} href={menuItem.path}>{menuItem.title}</Link>

                })}
                 


            </div>


    </div>

}

export default Navigation;
