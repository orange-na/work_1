import { useCallback, useState } from "react"

  export function Count() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((count) => count + 1);
        if(count > 10){
            alert('限界突破');
        }
        console.log(count)
    },[count]);

    return (
        <div className="text-center pb-5 bg-gray-200 rounded-lg mr-5 hover:bg-gray-400 duration-200">
            <button onClick={handleClick} className="text-2xl p-1 m-3">ボタン</button>
            <div>
            {count}
            </div>
        </div>       
    )
  }