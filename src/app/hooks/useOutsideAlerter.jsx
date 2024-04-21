'use client'
import {useState, useRef, useEffect} from 'react'

export const useOutSideAlerter = (init) => {
    const [isShow, setIsShow] = useState(init)
    const ref = useRef(null);

    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsShow(false)
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClickOutside)
  
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    })

    return {ref, isShow, setIsShow}

  }