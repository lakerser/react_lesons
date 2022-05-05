import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e) =>{
        this.setState({

            ...this.state,
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        debugger
        if (this.props.profileId === 23439){
            this.setState({
                editMode: true
            })
        }

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    }
    // onChangeText = (e)=>{
    //     this.setState({
    //
    //     })
    // }
    render() {


        debugger

        return (
            <>
                {
                    this.state.editMode
                        ?
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                                   type="text" value={this.state.status}/>
                        </div>
                        :
                        <div>
                            <p onDoubleClick={this.activateEditMode}> {this.props.status||'noStatus'}</p>
                        </div>

                }
            </>

        );
    };
}

export default ProfileStatus;