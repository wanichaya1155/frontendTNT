import React from 'react'

type Props = {
    data: string[];
    func:React.Dispatch<React.SetStateAction<String>>;

};

const about = ({data, func}: Props) => {
  return (
    <div>
        <h1>about</h1>
        <button onClick={() => func("state set!")}>click meee</button>
        { data.map((item,idx) => (
            <h4 key = {idx}>{item}</h4>
        ))}
    </div>
  )
}

export default about
//shortcut -> tsracfe