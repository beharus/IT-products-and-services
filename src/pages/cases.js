import React from "react"
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import Navbar from "../components/navbar/Navbar"

const Cases = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Navbar/>
            <h1>{t('welcome')} {t('about')} || Seema {t('holiday')} Developer</h1>
        </div>
       
    )
}
export default Cases