import React from 'react';
import ReactDOM from 'react-dom'


var ModalAlertTimeout = React.createClass({
    /* Trigger Modal Show
        To ensure Modal Shows when it renders - need to call the bootstrap
        This will be triggered as part of the component lifecycle
    */
    componentDidMount(){
        console.log("Modal Alert Timeout - compMount")
        setTimeout(()=> {
            let timeoutModal = this.refs.timeoutModal;
            
            $(timeoutModal).modal('show');
            $(timeoutModal).on('hidden.bs.modal', this.unMountComponent);
        },100);
    },
    unMountComponent () {
        alert("moo");
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
    },
    render() {
        return (
            <div id="alert" className="modal fade" ref='timeoutModal'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close"
                                data-dismiss="modal"
                                aria-label="close" >
                                <span aria-hidden="true">x</span>
                            </button>
                            <h4 className="modal-title">Timeout</h4>
                        </div>
                        <div className="modal-body">
                            <p>The cart had timed-out. Please try again!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ModalAlertTimeout;