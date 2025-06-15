import { useState } from "react"

const [name, setName] = useState('')
const [gender, setGender] = useState("남자")

const changeName = (event) => setName(event.target.value)
const changeGender = (event) => setGender(event.target.value)
const handleSubmit = () => {
    alert(`등록하신분의 이름: ${name} / 성별: ${gender}세 입니다.`)
    event.preventDefault()  // form 제출시 새로고침 방지
}

const SendForm = () => {
    return (
        <>
            <form action="">
                <label htmlFor="">이름</label>
                <input type="text" onChange={changeName}/>
                <hr />
                <label htmlFor="">성별</label>
                <select name="" id="" value={gender} onChange={changeGender}>
                    <option value="남자">남성</option>
                    <option value="여자">여성</option>
                </select>
                <input type="text" value={"제출"} />
            </form>
        </>
    )
}
export default SendForm