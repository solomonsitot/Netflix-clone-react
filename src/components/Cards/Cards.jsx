// eslint-disable-next-line no-unused-vars
import React from 'react'
import original1 from '../../img/test6.jpg'
import original2 from '../../img/test5.jpg'
import original3 from '../../img/test7.jpg'
import original4 from '../../img/test8.jpg'
import trend1 from '../../img/trend1.jpg'
import trend2 from '../../img/trend2.jpg'
import trend3 from '../../img/trend3.jpg'
import top1 from '../../img/top1.jpg'
import top2 from '../../img/top2.jpg'
import top3 from '../../img/top3.jpg'
import action1 from '../../img/action1.jpg'
import action2 from '../../img/action2.jpg'
import action4 from '../../img/action4.jpg'
import action3 from '../../img/action3.jpg'
import action5 from '../../img/action5.jpg'
import action6 from '../../img/action6.jpg'
import action7 from '../../img/action7.jpg'
import action8 from '../../img/action8.jpg'
import action9 from '../../img/action9.jpg'
import action10 from '../../img/action10.jpg'
import Card from '../Card/Card'
function Cards() {
  return (
      <>
      <Card size='card col-3 col-lg-2' title='Netflix Originals' movie1={original1} movie2={original2} movie3={original3} movie4={original4} movie5={original3} movie6={original4} movie7={original1} movie8={original2} movie9={original3} movie10={original4} />
      <Card size='card col-4 col-lg-2' title='Trending Now' movie1={trend1} movie2={trend2} movie3={trend3} movie4={trend2} movie5={trend3} movie6={trend1} movie7={action7} movie8={action8} movie9={action9} movie10={action10} />
      <Card size='card col-4 col-lg-3' title='Top Rated' movie1={top1} movie2={top2} movie3={top3} movie4={top1} movie5={top2} movie6={top3} movie7={action7} movie8={action8} movie9={action9} movie10={action10}/>
      <Card size='card col-4 col-lg-3' title='Action Movies' movie1={action10} movie2={action2} movie3={action3}movie4={action4} movie5={action5} movie6={action6} movie7={action7} movie8={action8} movie9={action9} movie10={action10}/>
      <Card size='card col-4 col-lg-3' title='Comedy Movies' movie1={trend2} movie2={action2} movie3={action3} movie4={action1} movie5={action7} movie6={action3} movie7={action7} movie8={action8} movie9={action9} movie10={action10}/>
      <Card size='card col-4 col-lg-3' title='Horror Movies' movie1={trend1} movie2={action9} movie3={action3} movie4={trend1} movie5={action2} movie6={action3} movie7={action7} movie8={action8} movie9={action9} movie10={action10}/>
      <Card size='card col-4 col-lg-3' title='Romance Movies' movie1={top1} movie2={action2} movie3={action3} movie4={action1} movie5={action2} movie6={action3}movie7={action7} movie8={action8} movie9={action9} movie10={action10}/>
      <Card size='card col-4 col-lg-3' title='Documentaries Movies' movie1={action8} movie2={action7} movie3={action9} movie4={action1} movie5={action2} movie6={action3} movie7={action7} movie8={action8} movie9={action9} movie10={action10}/>
      </>
  )
}

export default Cards