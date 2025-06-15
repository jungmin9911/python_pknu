import { useState } from "react"
import axios from 'axios'   // npm i axios로 설치 후 import
const url = "https://api.thecatapi.com/v1/images/search?limit=10"

const Axi = () => {
    const [sdata, setSdata] = useState({ username: "", password: "" })
    const [mydata, setMydata] = useState('')
    const [odata, setOdata] = useState('')
    // const [odata, setOdata] = useState([{ "url": 'https://cdn2.thecatapi.com/images/3qe.jpg' }])

    const handleInput = e => {
        setSdata(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const sendPost = () => axios.post('/data', sdata).then((res) => console.log(res.data))
    const myApi = () => axios.get('/api').then(res => setMydata(res.data))
    const catApi = () => axios.get(url).then(res => setOdata(res.data))

    return (
        <>
            <h1>14. AXIOS로 데이터 통신</h1>
            {/* 먼저 터미널에 npm i axios를 쳐서 설치부터 할 것 !! */}

            <div>
                <h2>서버로 보내는 값</h2>
                ID : <input type="text" name="username" onChange={handleInput} value={sdata.username} />{" "}
                PW : <input type="password" name="password" onChange={handleInput} value={sdata.password} />{" "}
                <button onClick={sendPost}>전송</button>
                <div>{sdata.username}  /  {sdata.password}</div>
            </div>
            <hr />
            <div>
                <button onClick={myApi}>내 서버에서 수신</button>
                <div>내 서버에서 받은 값</div>
                <div>{JSON.stringify(mydata)}</div>
            </div>
            <hr />
            <button onClick={catApi}>외부 서버에서 수신</button>
            <div>외부 서버에서 받은 값</div>
            {/* <div>{JSON.stringify(odata)}</div> */}
            {odata && odata.map((v, i) => {
                return (
                    <>
                        <img key={i} src={v.url} alt={i} width={200} height={200} style={
                            { objectFit: "cover", margin: "5px", borderRadius: "10px" }} />
                    </>
                )
            })}
        </>
    )
}

export default Axi