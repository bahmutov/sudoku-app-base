import React, { useState, useEffect } from 'react'
import { formatTime } from './Timer'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(url ? true : false)

  async function fetchData() {
    if (url) {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!url) {
      return
    }
    fetchData()
  }, [url])

  return { loading, data }
}

export const Overlay = (props) => {
  const { loading, data } = useFetch(
    props.overlay && props.time ? '/times/' + props.time : null,
  )
  const className = props.overlay ? 'overlay overlay--visible' : 'overlay'
  return (
    <div className={className} onClick={props.onClickOverlay}>
      <h2 className="overlay__text">
        <div className="overlay__greeting">
          You <span className="overlay__textspan1">solved</span>{' '}
          <span className="overlay__textspan2">it!</span>
        </div>
        {loading && <div className="overlay__loading">Loading...</div>}

        {data.length > 0 && (
          <ul className="overlay__times">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.current ? 'overlay__current' : ''}
                >
                  {formatTime(item)}
                </li>
              )
            })}
          </ul>
        )}
      </h2>
    </div>
  )
}
