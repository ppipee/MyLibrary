import React, { Component } from "react"
import './tab.scss'
class TabsBar extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="contents">
                        <div className="tabs">
                            <div className="tab1">
                                tab1
                        </div>
                            <div className="tab2">
                                tab2
                        </div>
                            <div className="tab3">
                                tab3
                        </div>
                            <div className="tab4">
                                tab4
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TabsBar