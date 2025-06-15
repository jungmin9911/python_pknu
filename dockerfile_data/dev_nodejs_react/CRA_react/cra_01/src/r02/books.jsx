const books = [
    {id: 101, bookname: "세상 모든 음식", price: 13000},
    {id: 102, bookname: "자바", price: 13000},
    {id: 103, bookname: "잠", price: 13000},
    {id: 104, bookname: "허리아픔", price: 13000}
]

const Books = () => {
    return (
        <>
            <ul>
                {books.map(v => <li key={v.id}>{v.bookname}({v.price})원</li>)}
            </ul>
        </>
    )
}
export default Books