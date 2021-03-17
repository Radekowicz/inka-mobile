import React, { createContext, Component } from "react"
import dayjs from "dayjs"
require("dayjs/locale/pl")
dayjs.locale("pl")

export const VisitContext = createContext()

export default class VisitContextProvider extends Component {
  state = {
    time: "8:00",
    date: dayjs().format("YYYY-MM-DD"),
    appointments: [],
    patientId: "605077b62a48a0095d54f7b7",
    isLogged: false,
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

  setPatientId = (patientId) => {
    this.setState({ patientId })
  }

  setIsLogged = (isLogged) => {
    this.setState({ isLogged })
  }

  render() {
    return (
      <VisitContext.Provider
        value={{
          ...this.state,
          setTime: this.setTime,
          setDate: this.setDate,
          setAppointments: this.setAppointments,
          setPatientId: this.setPatientId,
          setIsLogged: this.setIsLogged,
        }}
      >
        {this.props.children}
      </VisitContext.Provider>
    )
  }
}
