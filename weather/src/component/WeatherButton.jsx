import React from 'react'
import { Button } from 'react-bootstrap';

//버튼 눌렀을때 도시 이름으로 날씨정보 가져오기
//근데 여기 버튼이있고 정보를 나타내는 곳은 다른 컴포넌트에 있음
//어떻게 전달? 콜백도 같이 전달
//CurrentLocation은 어떻게 실행하면될까? getCurrentLocation활용하면 실행되는데 city가 null이면 됨
const WeatherButton = ({cities,setCity}) => {
  return (
    <div>
        <Button variant="warning" onClick={()=>setCity(null)}>CurrentLocation</Button>
        {cities.map((item,index)=>(
          <Button variant = "warning" onClick={()=>setCity(item)} key={index}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton