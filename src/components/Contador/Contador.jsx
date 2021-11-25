import React,{ Component } from "react";
import './Contador.css'


class Contador extends Component {
    state ={number: 0}

    handleIncrement = () =>{
        this.setState({
            number: this.state.number + 1
        })
    }
    handleDecrement = () =>{
        this.setState({
            number: this.state.number - 1
        })
    }
    handleReset = () =>{
        this.setState({
            number: 0
        })
    }

    render() {
        return (
            <>
            <h1 className="todo textoContador">Valor contador: {this.state.number}</h1>
            <button className="todo" onClick={this.handleIncrement}>Incremento</button>
            <button className="todo" onClick={this.handleDecrement}>Decremento</button>
            <button className="todo" onClick={this.handleReset}>Reseteo</button>
            </>
        );
    }
}

export default Contador;


