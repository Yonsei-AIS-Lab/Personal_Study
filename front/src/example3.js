import React from "react";

export default class Example3 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data_m: "",
          data_s: "",
        };
      }

  onclick = () => {
    fetch("http://localhost:3001/data", { 
        method: "post", //통신방법
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({
            data_m: json.main,
            data_s:json.side,
          });
        });
  };

  render() {
    return (
        <div>
        <h1>데이터 가져오기</h1>
        <h3>{this.state.data_m}</h3>
        <h3>{this.state.data_s}</h3>
        <button onClick={this.onclick}>가져오기</button>
      </div>
    );
  }
}