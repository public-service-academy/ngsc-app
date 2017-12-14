import React from 'react'
import s from './Loading.module.css'

const Loading = () => (
  <section className={s.container}>
    <div className={s.svgContainer}>
      <svg className={s.svg} viewBox={'25 25 50 50'}>
        <circle className={s.path} cx={50} cy={50} r={20} fill={'none'} strokeWidth={1} strokeMiterlimit={10} />
      </svg>
    </div>
  </section>
)

export default Loading