import { useState } from "react"
import axios from 'axios'

const Test = () => {
    const [sdata, setSdata] = useState({ name: "", age: "", memo: "" })
    const [resData, setResdata] = useState(null);
    const [mydata, setMydata] = useState('')
    const [lisData, setLisdata] = useState([]);

    const handleInput = e => {
        setSdata(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const sendPost = () => axios.post('/data', sdata).then((res) => setResdata(res.data))
    const myApi = () => axios.get('/api').then(res => setMydata(res.data));
    const getList = () => axios.get('/list').then(res => setLisdata(res.data));

    return (
        <>
            <h1>React 능력단위 평가</h1>
            <div>
                <h2>서버로 보내는 값</h2>
                이름 : <input type="text" name="name" onChange={handleInput} value={sdata.name} />{" "}
                나이 : <input type="number" name="age" onChange={handleInput} value={sdata.age} />{" "}
                메모 : <input type="text" name="memo" onChange={handleInput} value={sdata.memo} />{" "}
                <button onClick={sendPost}>전송</button>
                <div>{sdata.name} / {sdata.age} / {sdata.memo}</div>
            </div>
            {resData && (
                <div>
                    <h3>서버 응답 결과</h3>
                    <p>이름: {resData.name}</p>
                    <p>나이: {resData.age}</p>
                    <p>메모: {resData.memo}</p>
                </div>
            )}
            <hr />
            <div>
                <button onClick={myApi}>내 서버에서 수신</button>
                <div>내 서버에서 받은 값</div>
                <div>{JSON.stringify(mydata)}</div>
            </div>
            <hr />
            {/* <div>
                <button onClick={getList}>리스트 출력</button>
                <div>서버에서 받은 리스트</div>
                <ul>
                    <li></li>
                </ul>
            </div> */}
        </>
    )
}

export default Test