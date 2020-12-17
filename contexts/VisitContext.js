import React, {createContext, Component} from 'react';

export const VisitContext = createContext()

export default class VisitContextProvider extends Component {
    state = { 
        time: "0:00",
        date: "date",
        hours: [],
     }

     setTime = (time) => {
         this.setState( {time: time} )
     }

     setDate = (date) => {
        this.setState( {date: date} )
    }

    setHours = (hours) => {
        this.setState( {hours: hours} )
    }


    render() { 
        return (  
            <VisitContext.Provider value={{...this.state, setTime: this.setTime, setDate: this.setDate, setHours: this.setHours}}>
                {this.props.children}
            </VisitContext.Provider>
        );
    }
}
 