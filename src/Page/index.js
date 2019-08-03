import React, { Component } from 'react'

import './styles.css'

export default class Main extends Component{
    state = {
        rndnum : 0,
        rndnum2 : 0,
        problem : 0,
    }


    btnClick(){
        this.state.rndnum = Math.floor(Math.random() * 78);
        this.state.rndnum2 = Math.floor(Math.random() * 26);
        this.setState({problem: ((25 * this.state.rndnum) + this.state.rndnum2) + 1000}, ()=>{

        });
    };


    render(){
        return (
            <div>
            
                <h1>Página : {this.state.rndnum}</h1>
                <h1>Exercício : {this.state.rndnum2}</h1>
                <h1>Problema Nº {this.state.problem}</h1>
                <ul className = "ul1">
                    <button className = "Button" onClick = {() => this.btnClick()}>ROLL</button>
                    <ul className = "ul2">
                        <a target = "_blanck" className = "Button" href = {"https://www.urionlinejudge.com.br/judge/pt/problems/view/" + this.state.problem}>Acessar problema</a>
                    </ul>
                </ul>
            </div>
        );
    };
}
