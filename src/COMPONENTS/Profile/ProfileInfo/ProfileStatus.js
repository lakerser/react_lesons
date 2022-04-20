import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    // onChangeText = (e)=>{
    //     this.setState({
    //
    //     })
    // }

    render() {


        return (
            <>
                {
                    this.state.editMode
                        ?
                        <div>
                            <input autoFocus={true}  onBlur={this.deactivateEditMode}
                            type="text" value={this.props.aboutMe}/>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.activateEditMode}> {this.props.aboutMe}</span>
                        </div>

                }
            </>

        );
    };
}

export default ProfileStatus;