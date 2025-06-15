import { useState } from "react"
import list from "./list"

const Radio = () => {
    const [rad, setRad] = useState('테스트중')
    const handleRad = e => {
        const {value, checked} = e.target
        setRad(() => {
            return {[value]: checked}
        })
    }
    return (
        <>
            <h1>5. 라디오 버튼과 확인</h1>
            <h2>{JSON.stringify(rad)}</h2>
            {list.map((v, i) => {
                return (
                    <div key={i}>
                        <input type="radio" name="one" value={v} onChange={handleRad} />{v}<br/>
                    </div>
                )
            })}
        </>
    )
}
export default Radio