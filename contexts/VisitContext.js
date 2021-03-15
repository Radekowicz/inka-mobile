import React, { createContext, Component } from "react"

export const VisitContext = createContext()

export default class VisitContextProvider extends Component {
  state = {
    time: "0:00",
    date: "2021-03-15",
    appointments: [],
  }

  setTime = (time) => {
    this.setState({ time: time })
  }

  setDate = (date) => {
    this.setState({ date: date })
  }

  setAppointments = (appointments) => {
    this.setState({ appointments })
  }

  render() {
    return (
      <VisitContext.Provider
        value={{
          ...this.state,
          setTime: this.setTime,
          setDate: this.setDate,
          setAppointments: this.setAppointments,
        }}
      >
        {this.props.children}
      </VisitContext.Provider>
    )
  }
}
