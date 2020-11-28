import React, {createContext, Component} from 'react';

export const VisitContext = createContext()

export default class VisitContextProvider extends Component {
    state = { 
        time: "0:00",
        date: "date",
     }

     setTime = (time) => {
         this.setState( {time: time} )
     }

     setDate = (date) => {
        this.setState( {date: date} )
    }


    render() { 
        return (  
            <VisitContext.Provider value={{...this.state, setTime: this.setTime, setDate: this.setDate}}>
                {this.props.children}
            </VisitContext.Provider>
        );
    }
}
 