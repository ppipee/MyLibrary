import React, { Component } from "react"
import './dnd.scss'
class DragAndDrop extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    allowDrop = (ev) => {
        ev.dataTransfer.effectAllowed = "move";
        ev.preventDefault();
    }

    drag = (ev) => {
        ev.dataTransfer.setData("text/plain", ev.target.id);
        ev.dataTransfer.effectAllowed = "move";
    }
    drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data)
        ev.target.appendChild(document.getElementById(data));
        ev.dataTransfer.clearData();
    }

    render() {
        return (
            <div className="container">
                <div className="box" id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
                <div className="box" id="div2" onDrop={this.drop} onDragOver={this.allowDrop}>
                    <div className="item-move" id="drag1" draggable="true" onDragStart={this.drag}></div>
                </div>
                <br />
            </div>
        )
    }
}
export default DragAndDrop