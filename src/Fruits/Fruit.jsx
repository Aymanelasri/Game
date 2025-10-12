import { useState } from 'react';

export default function Fruit() {
    const [fruits, setFruits] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value); // تحديث input
    };

    const handleAddFruit = (e) => {
        e.preventDefault(); // منع الفورم يدير reload
      
            setFruits([...fruits, inputValue]); // نزيد الفاكهة
            setInputValue(''); // نفرغ input هنا
        
    };

    return (
        <>
        <h2>FRUITS</h2>
       
        <div>
            <form onSubmit={handleAddFruit}>
                <input  type="text"  value={inputValue}  onChange={handleInput} placeholder="Add"
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
         </>
    );
}