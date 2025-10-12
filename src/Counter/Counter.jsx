/*import  { Component } from 'react';
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0,
            date :undefined, 

        };
    }
    hundleClick = () => {
         
            this.setState(prevState => {
                return {counter: prevState.counter + 1}
            });
        
    

    }
    hundleClick2 = () => {
         
            this.setState(prevState => {
                return {counter: prevState.counter - 1}
            });
        }

   
       


    render() {
        return (<div>
            il y a {this.state.counter} secondes
            <button onClick={this.hundleClick}>start</button>
            <button onClick={this.hundleClick2}>n9os</button>
            </div>)
    }

}*/
//hooks
//useState()
//useEffect()
import{ useState ,useEffect} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    var timer=null
    /*useEffect(() => {
        console.log('Component every day');
        

    });*/
    useEffect(() => {
        console.log('Component demounted');
        setTime(new Date());
        timer=setInterval(() => {
           setTime(new Date());
           
        }, 1000);
        return () => {
            clearInterval(timer);
        }
        
        

    }, []);
    useEffect(() => {
        console.log('Component changed', count);
        

    }, [count]);
    


    return (
        <>
            <div>
                Counter Component
            </div>
            <span> time :  {time.toLocaleString()}</span> <br /><br />
            <button onClick={() => setCount(count + 1) }>start</button>
            <button onClick={() => setCount(count - 1)}>n9os</button>
            <p>il y a {count} secondes</p>
        </>
    );
}
